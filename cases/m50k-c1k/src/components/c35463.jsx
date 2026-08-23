import React from 'react';
const LABEL_35463 = 'component_35463';
export function Component35463({ value = 35463, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35463, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35463, 'data-value': derived.doubled }, children);
}
export default Component35463;
