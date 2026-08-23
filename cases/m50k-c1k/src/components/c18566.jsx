import React from 'react';
const LABEL_18566 = 'component_18566';
export function Component18566({ value = 18566, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18566, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18566, 'data-value': derived.doubled }, children);
}
export default Component18566;
