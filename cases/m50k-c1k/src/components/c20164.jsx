import React from 'react';
const LABEL_20164 = 'component_20164';
export function Component20164({ value = 20164, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20164, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20164, 'data-value': derived.doubled }, children);
}
export default Component20164;
