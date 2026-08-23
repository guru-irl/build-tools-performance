import React from 'react';
const LABEL_26932 = 'component_26932';
export function Component26932({ value = 26932, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26932, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26932, 'data-value': derived.doubled }, children);
}
export default Component26932;
