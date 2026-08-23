import React from 'react';
const LABEL_28338 = 'component_28338';
export function Component28338({ value = 28338, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28338, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28338, 'data-value': derived.doubled }, children);
}
export default Component28338;
