import React from 'react';
const LABEL_29251 = 'component_29251';
export function Component29251({ value = 29251, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29251, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29251, 'data-value': derived.doubled }, children);
}
export default Component29251;
