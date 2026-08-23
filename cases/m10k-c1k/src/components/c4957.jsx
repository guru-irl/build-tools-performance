import React from 'react';
const LABEL_4957 = 'component_4957';
export function Component4957({ value = 4957, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4957, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4957, 'data-value': derived.doubled }, children);
}
export default Component4957;
