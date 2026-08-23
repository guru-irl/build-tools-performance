import React from 'react';
const LABEL_40756 = 'component_40756';
export function Component40756({ value = 40756, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40756, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40756, 'data-value': derived.doubled }, children);
}
export default Component40756;
