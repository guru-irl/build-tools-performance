import React from 'react';
const LABEL_28184 = 'component_28184';
export function Component28184({ value = 28184, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28184, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28184, 'data-value': derived.doubled }, children);
}
export default Component28184;
