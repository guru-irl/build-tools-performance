import React from 'react';
const LABEL_26268 = 'component_26268';
export function Component26268({ value = 26268, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26268, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26268, 'data-value': derived.doubled }, children);
}
export default Component26268;
