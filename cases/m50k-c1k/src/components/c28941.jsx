import React from 'react';
const LABEL_28941 = 'component_28941';
export function Component28941({ value = 28941, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28941, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28941, 'data-value': derived.doubled }, children);
}
export default Component28941;
