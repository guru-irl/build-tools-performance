import React from 'react';
const LABEL_17916 = 'component_17916';
export function Component17916({ value = 17916, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17916, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17916, 'data-value': derived.doubled }, children);
}
export default Component17916;
