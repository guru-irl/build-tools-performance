import React from 'react';
const LABEL_32793 = 'component_32793';
export function Component32793({ value = 32793, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32793, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32793, 'data-value': derived.doubled }, children);
}
export default Component32793;
