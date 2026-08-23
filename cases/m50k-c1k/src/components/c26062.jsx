import React from 'react';
const LABEL_26062 = 'component_26062';
export function Component26062({ value = 26062, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26062, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26062, 'data-value': derived.doubled }, children);
}
export default Component26062;
