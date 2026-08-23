import React from 'react';
const LABEL_31028 = 'component_31028';
export function Component31028({ value = 31028, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31028, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31028, 'data-value': derived.doubled }, children);
}
export default Component31028;
