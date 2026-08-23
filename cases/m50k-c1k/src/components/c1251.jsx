import React from 'react';
const LABEL_1251 = 'component_1251';
export function Component1251({ value = 1251, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1251, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1251, 'data-value': derived.doubled }, children);
}
export default Component1251;
