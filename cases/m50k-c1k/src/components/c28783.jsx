import React from 'react';
const LABEL_28783 = 'component_28783';
export function Component28783({ value = 28783, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28783, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28783, 'data-value': derived.doubled }, children);
}
export default Component28783;
