import React from 'react';
const LABEL_26221 = 'component_26221';
export function Component26221({ value = 26221, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26221, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26221, 'data-value': derived.doubled }, children);
}
export default Component26221;
