import React from 'react';
const LABEL_43224 = 'component_43224';
export function Component43224({ value = 43224, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43224, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43224, 'data-value': derived.doubled }, children);
}
export default Component43224;
