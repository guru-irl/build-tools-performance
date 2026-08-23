import React from 'react';
const LABEL_28166 = 'component_28166';
export function Component28166({ value = 28166, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28166, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28166, 'data-value': derived.doubled }, children);
}
export default Component28166;
