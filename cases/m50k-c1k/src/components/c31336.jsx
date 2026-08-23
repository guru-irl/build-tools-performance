import React from 'react';
const LABEL_31336 = 'component_31336';
export function Component31336({ value = 31336, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31336, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31336, 'data-value': derived.doubled }, children);
}
export default Component31336;
