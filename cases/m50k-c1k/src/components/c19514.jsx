import React from 'react';
const LABEL_19514 = 'component_19514';
export function Component19514({ value = 19514, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19514, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19514, 'data-value': derived.doubled }, children);
}
export default Component19514;
