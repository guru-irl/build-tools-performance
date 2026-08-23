import React from 'react';
const LABEL_26783 = 'component_26783';
export function Component26783({ value = 26783, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26783, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26783, 'data-value': derived.doubled }, children);
}
export default Component26783;
