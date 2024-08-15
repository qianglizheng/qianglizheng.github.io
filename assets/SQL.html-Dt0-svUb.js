import{_ as a,c as e,o as n,a as s}from"./app-crvdi8lb.js";const l={},d=s(`<p><a name="B7vxH"></a></p><h2 id="通用语法" tabindex="-1"><a class="header-anchor" href="#通用语法"><span>通用语法</span></a></h2><p><a name="MslZt"></a></p><h3 id="sql语句可以单行或者多行书写-以分号结尾" tabindex="-1"><a class="header-anchor" href="#sql语句可以单行或者多行书写-以分号结尾"><span>SQL语句可以单行或者多行书写，以分号结尾</span></a></h3><p><a name="Nyxcj"></a></p><h3 id="sql语句可以使用空格-缩进来增强语句的可读性" tabindex="-1"><a class="header-anchor" href="#sql语句可以使用空格-缩进来增强语句的可读性"><span>SQL语句可以使用空格/缩进来增强语句的可读性</span></a></h3><p><a name="h6pTz"></a></p><h3 id="mysql数据库的sql不区分大小写-关键字建议使用大写" tabindex="-1"><a class="header-anchor" href="#mysql数据库的sql不区分大小写-关键字建议使用大写"><span>MySQL数据库的SQL不区分大小写，关键字建议使用大写</span></a></h3><p><a name="Zwd05"></a></p><h3 id="注释" tabindex="-1"><a class="header-anchor" href="#注释"><span>注释</span></a></h3><ul><li>单行注释：--注释内容 或 # 注释内容（MySQL特有）</li><li>多行注释：/<em>注释</em>/ <a name="hjYaH"></a></li></ul><h2 id="sql分类" tabindex="-1"><a class="header-anchor" href="#sql分类"><span>SQL分类</span></a></h2><p><a name="G7lNT"></a></p><h3 id="ddl" tabindex="-1"><a class="header-anchor" href="#ddl"><span>DDL</span></a></h3><ul><li>Data Definition Language</li><li>数据定义语言，用来定义数据库对象（数据库，表，字段） <a name="rMOgV"></a></li></ul><h3 id="dml" tabindex="-1"><a class="header-anchor" href="#dml"><span>DML</span></a></h3><ul><li>Data Manipulation Language</li><li>数据操作语言，用来对数据库表中的数据进行增删改 <a name="oWRJv"></a></li></ul><h3 id="dql" tabindex="-1"><a class="header-anchor" href="#dql"><span>DQL</span></a></h3><ul><li>Data Query Language</li><li>数据查询语言，用来查询数据库表中的记录 <a name="tvBJ1"></a></li></ul><h3 id="dcl" tabindex="-1"><a class="header-anchor" href="#dcl"><span>DCL</span></a></h3><ul><li>Data Control Language</li><li>数据控制语言，用来创建数据库用户、控制数据库的访问权限 <a name="qKzwm"></a></li></ul><h2 id="ddl语句" tabindex="-1"><a class="header-anchor" href="#ddl语句"><span>DDL语句</span></a></h2><p><a name="hNMTC"></a></p><h3 id="操作数据库" tabindex="-1"><a class="header-anchor" href="#操作数据库"><span>操作数据库</span></a></h3><p><a name="MHMiS"></a></p><h4 id="查询" tabindex="-1"><a class="header-anchor" href="#查询"><span>查询</span></a></h4><ul><li>显示所有数据库<code>show databases;</code></li><li>查看当前使用的数据库<code>select databases();</code><a name="z83hB"></a></li></ul><h4 id="创建" tabindex="-1"><a class="header-anchor" href="#创建"><span>创建</span></a></h4><ul><li><code>create database [if not exists] 数据库名 [default charset 字符集] [collate 排序规则];</code><a name="LYGSw"></a></li></ul><h4 id="删除" tabindex="-1"><a class="header-anchor" href="#删除"><span>删除</span></a></h4><ul><li><code>drop databases [if exists] 数据库名;</code><a name="Pr8ow"></a></li></ul><h4 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h4><ul><li><code>use 数据库名;</code><a name="zXcEZ"></a></li></ul><h3 id="操作表结构" tabindex="-1"><a class="header-anchor" href="#操作表结构"><span>操作表结构</span></a></h3><p><a name="xnMe1"></a></p><h4 id="查询-1" tabindex="-1"><a class="header-anchor" href="#查询-1"><span>查询</span></a></h4><ul><li>查询当前数据库所有表<code>show tables;</code></li><li>查询表结构<code>desc 表名;</code></li><li>查询指定表的建表语句<code>show create table 表名;</code><a name="QmfMS"></a></li></ul><h4 id="创建-1" tabindex="-1"><a class="header-anchor" href="#创建-1"><span>创建</span></a></h4><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">create</span> <span class="token keyword">table</span> 表名<span class="token punctuation">(</span></span>
<span class="line">  字段<span class="token number">1</span> 字段<span class="token number">1</span>类型 <span class="token punctuation">[</span><span class="token keyword">comment</span> 字段<span class="token number">1</span>注释<span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  字段<span class="token number">2</span> 字段<span class="token number">2</span>类型 <span class="token punctuation">[</span><span class="token keyword">comment</span> 字段<span class="token number">2</span>注释<span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  字段<span class="token number">3</span> 字段<span class="token number">3</span>类型 <span class="token punctuation">[</span><span class="token keyword">comment</span> 字段<span class="token number">3</span>注释<span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  字段<span class="token number">4</span> 字段<span class="token number">4</span>类型 <span class="token punctuation">[</span><span class="token keyword">comment</span> 字段<span class="token number">4</span>注释<span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token keyword">comment</span> 表注释<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="xGtDB"></a></p><h4 id="修改" tabindex="-1"><a class="header-anchor" href="#修改"><span>修改</span></a></h4><ul><li>添加字段 <code>alter table 表名 add 字段名 类型(长度) [comment 注释] [约束];</code></li><li>修改字段 <ul><li>修改数据类型<code>alter table 表名 modify 字段名 新数据类型(长度);</code></li><li>修改字段名和字段类型<code>alter table 表名 change 旧字段名 新字段名 类型(长度)[comment 注释] [约束];</code></li></ul></li><li>删除字段<code>alter table 表名 drop 字段名;</code></li><li>修改表名<code>alter table 表名 rename to 新表名;</code><a name="wtmJx"></a></li></ul><h4 id="删除-1" tabindex="-1"><a class="header-anchor" href="#删除-1"><span>删除</span></a></h4><ul><li>删除表<code>drop table [if exists] 表名;</code></li><li>删除指定表，并重新创建该表，相当于是删除表中的记录<code>truncate table 表名;</code><a name="VBA4a"></a></li></ul><h2 id="dml语句" tabindex="-1"><a class="header-anchor" href="#dml语句"><span>DML语句</span></a></h2><p><a name="aI1Ow"></a></p><h3 id="添加数据insert" tabindex="-1"><a class="header-anchor" href="#添加数据insert"><span>添加数据insert</span></a></h3><p><a name="AFaXk"></a></p><h4 id="给指定字段添加数据" tabindex="-1"><a class="header-anchor" href="#给指定字段添加数据"><span>给指定字段添加数据</span></a></h4><p><code>insert into 表名 (字段1,字段2...) values (值1,值2...);</code><a name="iSx7J"></a></p><h4 id="给全部字段添加数据" tabindex="-1"><a class="header-anchor" href="#给全部字段添加数据"><span>给全部字段添加数据</span></a></h4><p><code>insert into 表名 values(值1,值2...);</code><a name="t1wuF"></a></p><h4 id="批量添加数据" tabindex="-1"><a class="header-anchor" href="#批量添加数据"><span>批量添加数据</span></a></h4><ul><li><code>insert into 表名(字段1,字段2...) values(字段1,字段2...),(字段1,字段2...)...;</code></li><li><code>insert into 表名 values (字段1,字段2...),(字段1,字段2...)...;</code></li></ul><p>注意事项：</p><ul><li>插入数据时，指定的字段顺序需要与值的顺序是一一对应的</li><li>字符串和日期型数据应该包含在引号中</li><li>插入的数据大小，应该在字段的规定范围内 <a name="Ua8dQ"></a></li></ul><h3 id="修改数据update" tabindex="-1"><a class="header-anchor" href="#修改数据update"><span>修改数据update</span></a></h3><p><code>update 表名 set 字段1=值1,字段2=值2... [where 条件];</code><a name="dL20k"></a></p><h3 id="删除数据delete" tabindex="-1"><a class="header-anchor" href="#删除数据delete"><span>删除数据delete</span></a></h3><p><code>delet from 表名 [where 条件];</code><a name="ab7ba"></a></p><h2 id="dql语句" tabindex="-1"><a class="header-anchor" href="#dql语句"><span>DQL语句</span></a></h2><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">select</span></span>
<span class="line">      字段列表</span>
<span class="line"><span class="token keyword">from</span></span>
<span class="line">      表名列表</span>
<span class="line"><span class="token keyword">where</span></span>
<span class="line">      条件列表</span>
<span class="line"><span class="token keyword">group</span> <span class="token keyword">by</span></span>
<span class="line">      分组字段列表</span>
<span class="line"><span class="token keyword">having</span></span>
<span class="line">      分组后条件列表</span>
<span class="line"><span class="token keyword">order</span> <span class="token keyword">by</span></span>
<span class="line">      排序字段列表</span>
<span class="line"><span class="token keyword">limit</span></span>
<span class="line">      分页参数</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="Ltj62"></a></p><h3 id="基础查询" tabindex="-1"><a class="header-anchor" href="#基础查询"><span>基础查询</span></a></h3><p><a name="Z0y6Q"></a></p><h4 id="查询多个字段" tabindex="-1"><a class="header-anchor" href="#查询多个字段"><span>查询多个字段</span></a></h4><p><code>select 字段1,字段2... from 表名;</code><br><code>select * from 表名;</code><br>在实际开发中尽量不用使用<code>*</code></p><ul><li>不直观</li><li>影响效率 <a name="SwlJ0"></a></li></ul><h4 id="设置别名" tabindex="-1"><a class="header-anchor" href="#设置别名"><span>设置别名</span></a></h4><p><code>select 字段1 [as 别名],字段2 [as 别名]... from 表名;</code><br><code>as</code>可以省略 <a name="Ej1a7"></a></p><h4 id="去重" tabindex="-1"><a class="header-anchor" href="#去重"><span>去重</span></a></h4><p><code>select distinct 字段列表 from 表名;</code><a name="Xp0oA"></a></p><h3 id="条件查询" tabindex="-1"><a class="header-anchor" href="#条件查询"><span>条件查询</span></a></h3><p><a name="RfUQu"></a></p><h4 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h4><p><code>select 字段列表 from 表名 where 条件列表;</code><a name="Y7IW1"></a></p><h4 id="条件" tabindex="-1"><a class="header-anchor" href="#条件"><span>条件</span></a></h4><p><a name="wPJ1l"></a></p><h5 id="比较运算符" tabindex="-1"><a class="header-anchor" href="#比较运算符"><span>比较运算符</span></a></h5><table><thead><tr><th>比较运算符</th><th>功能</th></tr></thead><tbody><tr><td>&gt;</td><td>大于</td></tr><tr><td>&gt;=</td><td>大于等于</td></tr><tr><td>&lt;</td><td>小于</td></tr><tr><td>&lt;=</td><td>小于等于</td></tr><tr><td>=</td><td>等于</td></tr><tr><td>&lt;&gt;或 !=</td><td>不等于</td></tr><tr><td>between...and...</td><td>在某个范围内（含最小最大值）</td></tr><tr><td>in(...)</td><td>在in之后的列表中的值，多选一</td></tr><tr><td>like 占位符</td><td>模糊匹配（_匹配单个字符，%匹配多个字符）</td></tr><tr><td>is null</td><td>是null</td></tr><tr><td>is not null</td><td>不是null</td></tr></tbody></table><p><a name="rBIoX"></a></p><h5 id="条件运算符" tabindex="-1"><a class="header-anchor" href="#条件运算符"><span>条件运算符</span></a></h5><table><thead><tr><th>逻辑运算符</th><th>功能</th></tr></thead><tbody><tr><td>and 或 &amp;&amp;</td><td>并且</td></tr><tr><td>or 或 ||</td><td>或者</td></tr><tr><td>not 或者 !</td><td>非，不是</td></tr></tbody></table><p><a name="DSHND"></a></p><h3 id="聚合函数" tabindex="-1"><a class="header-anchor" href="#聚合函数"><span>聚合函数</span></a></h3><p><a name="BFVMJ"></a></p><h4 id="什么是聚合函数" tabindex="-1"><a class="header-anchor" href="#什么是聚合函数"><span>什么是聚合函数</span></a></h4><p>将一列数据作为一个整体，进行纵向计算。 <a name="IcyNv"></a></p><h4 id="常见聚合函数" tabindex="-1"><a class="header-anchor" href="#常见聚合函数"><span>常见聚合函数</span></a></h4><table><thead><tr><th>函数</th><th>功能</th></tr></thead><tbody><tr><td>count</td><td>统计数量</td></tr><tr><td>max</td><td>最大值</td></tr><tr><td>min</td><td>最小值</td></tr><tr><td>avg</td><td>平均值</td></tr><tr><td>sum</td><td>求和</td></tr></tbody></table><p><a name="J7Zv7"></a></p><h4 id="语法-1" tabindex="-1"><a class="header-anchor" href="#语法-1"><span>语法</span></a></h4><p><code>select 聚合函数(字段列表) from 表名;</code><br>注意：所有的null值不参与计算 <a name="f6fe5"></a></p><h3 id="分组查询" tabindex="-1"><a class="header-anchor" href="#分组查询"><span>分组查询</span></a></h3><p><a name="ioyxE"></a></p><h4 id="语法-2" tabindex="-1"><a class="header-anchor" href="#语法-2"><span>语法</span></a></h4><p><code>select 字段列表 from 表名 [where 条件] group by 分组字段名 [having 分组后过滤条件];</code><a name="eb9DX"></a></p><h4 id="where与having区别" tabindex="-1"><a class="header-anchor" href="#where与having区别"><span>where与having区别</span></a></h4><ul><li>执行时机不同：where是分组之前进行过滤，不满足where条件，不参与分组；而having是分组之后对结果进行过滤</li><li>判断条件不同：where不能对聚合函数进行判断，而having可以 <a name="d6QTJ"></a></li></ul><h4 id="注意" tabindex="-1"><a class="header-anchor" href="#注意"><span>注意</span></a></h4><ul><li>执行顺序：where &gt; 聚合函数 &gt; having</li><li>分组之后，查询的字段一般为聚合函数和分组字段，查询其他字段无任何意义 <a name="tD81S"></a></li></ul><h3 id="排序查询" tabindex="-1"><a class="header-anchor" href="#排序查询"><span>排序查询</span></a></h3><p><a name="Ikggg"></a></p><h4 id="语法-3" tabindex="-1"><a class="header-anchor" href="#语法-3"><span>语法</span></a></h4><p><code>select 字段列表 from 表名 order by 字段1 排序方式1,字段2 排序方式2;</code><a name="n2b9k"></a></p><h4 id="排序方式" tabindex="-1"><a class="header-anchor" href="#排序方式"><span>排序方式</span></a></h4><ul><li>ASC：升序（默认值）</li><li>DESC ：降序</li></ul><p>如果是多字段排序，当第一个字段值相同时，才会根据第二个字段进行排序 <a name="DWSM5"></a></p><h3 id="分页查询" tabindex="-1"><a class="header-anchor" href="#分页查询"><span>分页查询</span></a></h3><p><a name="rjGaV"></a></p><h4 id="语法-4" tabindex="-1"><a class="header-anchor" href="#语法-4"><span>语法</span></a></h4><p><code>select 字段列表 from 表名 limit 起始索引,查询记录数;</code><a name="PLagp"></a></p><h4 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项"><span>注意事项</span></a></h4><ul><li>起始索引从0开始，起始索引=（查询页码 - 1）* 每页显示记录数</li><li>分页查询是数据库的方言，不同的数据库有不同的实现，MySQL中是Limit</li><li>如果查询的是第一页数据，起始索引可以省略，直接简写为 limit 10 <a name="Ax7Ww"></a></li></ul><h2 id="dcl语句" tabindex="-1"><a class="header-anchor" href="#dcl语句"><span>DCL语句</span></a></h2><p><a name="HUzIl"></a></p><h3 id="管理用户" tabindex="-1"><a class="header-anchor" href="#管理用户"><span>管理用户</span></a></h3><p><a name="fAJP8"></a></p><h4 id="查询用户" tabindex="-1"><a class="header-anchor" href="#查询用户"><span>查询用户</span></a></h4><p><code>use mysql;</code><br><code>select * from user;</code><a name="Wj8Y7"></a></p><h4 id="创建用户" tabindex="-1"><a class="header-anchor" href="#创建用户"><span>创建用户</span></a></h4><p><code>create user &#39;用户名&#39;@&#39;主机名&#39; identified by &#39;密码&#39;;</code><a name="jyOtv"></a></p><h4 id="修改用户密码" tabindex="-1"><a class="header-anchor" href="#修改用户密码"><span>修改用户密码</span></a></h4><p><code>alter user &#39;用户名&#39;@&#39;主机名&#39; identified with mysql_native_password by &#39;新密码&#39;;</code><a name="zNcc6"></a></p><h4 id="删除用户" tabindex="-1"><a class="header-anchor" href="#删除用户"><span>删除用户</span></a></h4><p><code>drop user &#39;用户名&#39;@&#39;主机名&#39;;</code><a name="ToBJX"></a></p><h3 id="权限控制" tabindex="-1"><a class="header-anchor" href="#权限控制"><span>权限控制</span></a></h3><p><a name="Vv8Hq"></a></p><h4 id="常见的权限" tabindex="-1"><a class="header-anchor" href="#常见的权限"><span>常见的权限</span></a></h4><ul><li>all，all privileges</li><li>select</li><li>insert</li><li>update</li><li>delete</li><li>alter</li><li>drop</li><li>create <a name="wl18U"></a></li></ul><h4 id="查询权限" tabindex="-1"><a class="header-anchor" href="#查询权限"><span>查询权限</span></a></h4><p><code>show grants for &#39;用户名&#39;@&#39;主机名&#39;;</code><a name="BAV1L"></a></p><h4 id="授予权限" tabindex="-1"><a class="header-anchor" href="#授予权限"><span>授予权限</span></a></h4><p><code>grant 权限列表 on 数据库名.表名 to &#39;用户名&#39;@&#39;主机名&#39;;</code><a name="p1qsL"></a></p><h4 id="撤销权限" tabindex="-1"><a class="header-anchor" href="#撤销权限"><span>撤销权限</span></a></h4><p><code>revoke 权限列表 on 数据库名.表名 from &#39;用户名&#39;@&#39;主机名&#39;;</code><a name="sWHZF"></a></p><h4 id="注意-1" tabindex="-1"><a class="header-anchor" href="#注意-1"><span>注意</span></a></h4><ul><li>多个权限之间，使用逗号分隔</li><li>授权时，数据库名和表名可以使用 * 进行通配，代表所有</li></ul>`,138),t=[d];function i(r,c){return n(),e("div",null,t)}const p=a(l,[["render",i],["__file","SQL.html.vue"]]),o=JSON.parse('{"path":"/SQL.html","title":"","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"通用语法","slug":"通用语法","link":"#通用语法","children":[{"level":3,"title":"SQL语句可以单行或者多行书写，以分号结尾","slug":"sql语句可以单行或者多行书写-以分号结尾","link":"#sql语句可以单行或者多行书写-以分号结尾","children":[]},{"level":3,"title":"SQL语句可以使用空格/缩进来增强语句的可读性","slug":"sql语句可以使用空格-缩进来增强语句的可读性","link":"#sql语句可以使用空格-缩进来增强语句的可读性","children":[]},{"level":3,"title":"MySQL数据库的SQL不区分大小写，关键字建议使用大写","slug":"mysql数据库的sql不区分大小写-关键字建议使用大写","link":"#mysql数据库的sql不区分大小写-关键字建议使用大写","children":[]},{"level":3,"title":"注释","slug":"注释","link":"#注释","children":[]}]},{"level":2,"title":"SQL分类","slug":"sql分类","link":"#sql分类","children":[{"level":3,"title":"DDL","slug":"ddl","link":"#ddl","children":[]},{"level":3,"title":"DML","slug":"dml","link":"#dml","children":[]},{"level":3,"title":"DQL","slug":"dql","link":"#dql","children":[]},{"level":3,"title":"DCL","slug":"dcl","link":"#dcl","children":[]}]},{"level":2,"title":"DDL语句","slug":"ddl语句","link":"#ddl语句","children":[{"level":3,"title":"操作数据库","slug":"操作数据库","link":"#操作数据库","children":[]},{"level":3,"title":"操作表结构","slug":"操作表结构","link":"#操作表结构","children":[]}]},{"level":2,"title":"DML语句","slug":"dml语句","link":"#dml语句","children":[{"level":3,"title":"添加数据insert","slug":"添加数据insert","link":"#添加数据insert","children":[]},{"level":3,"title":"修改数据update","slug":"修改数据update","link":"#修改数据update","children":[]},{"level":3,"title":"删除数据delete","slug":"删除数据delete","link":"#删除数据delete","children":[]}]},{"level":2,"title":"DQL语句","slug":"dql语句","link":"#dql语句","children":[{"level":3,"title":"基础查询","slug":"基础查询","link":"#基础查询","children":[]},{"level":3,"title":"条件查询","slug":"条件查询","link":"#条件查询","children":[]},{"level":3,"title":"聚合函数","slug":"聚合函数","link":"#聚合函数","children":[]},{"level":3,"title":"分组查询","slug":"分组查询","link":"#分组查询","children":[]},{"level":3,"title":"排序查询","slug":"排序查询","link":"#排序查询","children":[]},{"level":3,"title":"分页查询","slug":"分页查询","link":"#分页查询","children":[]}]},{"level":2,"title":"DCL语句","slug":"dcl语句","link":"#dcl语句","children":[{"level":3,"title":"管理用户","slug":"管理用户","link":"#管理用户","children":[]},{"level":3,"title":"权限控制","slug":"权限控制","link":"#权限控制","children":[]}]}],"git":{},"filePathRelative":"SQL.md"}');export{p as comp,o as data};
