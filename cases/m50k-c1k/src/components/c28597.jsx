import React from 'react';
const LABEL_28597 = 'component_28597';
export function Component28597({ value = 28597, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28597, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28597, 'data-value': derived.doubled }, children);
}
export default Component28597;
