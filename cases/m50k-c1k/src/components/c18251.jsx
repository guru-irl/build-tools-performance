import React from 'react';
const LABEL_18251 = 'component_18251';
export function Component18251({ value = 18251, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18251, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18251, 'data-value': derived.doubled }, children);
}
export default Component18251;
