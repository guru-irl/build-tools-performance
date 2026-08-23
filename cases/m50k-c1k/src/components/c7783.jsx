import React from 'react';
const LABEL_7783 = 'component_7783';
export function Component7783({ value = 7783, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7783, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7783, 'data-value': derived.doubled }, children);
}
export default Component7783;
