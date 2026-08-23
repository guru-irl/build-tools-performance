import React from 'react';
const LABEL_40790 = 'component_40790';
export function Component40790({ value = 40790, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40790, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40790, 'data-value': derived.doubled }, children);
}
export default Component40790;
