import React from 'react';
const LABEL_18793 = 'component_18793';
export function Component18793({ value = 18793, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18793, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18793, 'data-value': derived.doubled }, children);
}
export default Component18793;
