import React from 'react';
const LABEL_3075 = 'component_3075';
export function Component3075({ value = 3075, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3075, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3075, 'data-value': derived.doubled }, children);
}
export default Component3075;
