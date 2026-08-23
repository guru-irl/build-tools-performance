import React from 'react';
const LABEL_18227 = 'component_18227';
export function Component18227({ value = 18227, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18227, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18227, 'data-value': derived.doubled }, children);
}
export default Component18227;
