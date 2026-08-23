import React from 'react';
const LABEL_32238 = 'component_32238';
export function Component32238({ value = 32238, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32238, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32238, 'data-value': derived.doubled }, children);
}
export default Component32238;
