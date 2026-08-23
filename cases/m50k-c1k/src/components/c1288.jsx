import React from 'react';
const LABEL_1288 = 'component_1288';
export function Component1288({ value = 1288, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1288, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1288, 'data-value': derived.doubled }, children);
}
export default Component1288;
