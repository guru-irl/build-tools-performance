import React from 'react';
const LABEL_40253 = 'component_40253';
export function Component40253({ value = 40253, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40253, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40253, 'data-value': derived.doubled }, children);
}
export default Component40253;
