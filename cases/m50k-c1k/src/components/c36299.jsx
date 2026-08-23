import React from 'react';
const LABEL_36299 = 'component_36299';
export function Component36299({ value = 36299, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36299, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36299, 'data-value': derived.doubled }, children);
}
export default Component36299;
