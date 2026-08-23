import React from 'react';
const LABEL_38045 = 'component_38045';
export function Component38045({ value = 38045, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38045, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38045, 'data-value': derived.doubled }, children);
}
export default Component38045;
