import React from 'react';
const LABEL_43096 = 'component_43096';
export function Component43096({ value = 43096, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43096, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43096, 'data-value': derived.doubled }, children);
}
export default Component43096;
