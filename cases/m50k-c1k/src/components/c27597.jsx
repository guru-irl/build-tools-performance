import React from 'react';
const LABEL_27597 = 'component_27597';
export function Component27597({ value = 27597, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27597, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27597, 'data-value': derived.doubled }, children);
}
export default Component27597;
