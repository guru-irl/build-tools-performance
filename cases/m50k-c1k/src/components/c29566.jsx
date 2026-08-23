import React from 'react';
const LABEL_29566 = 'component_29566';
export function Component29566({ value = 29566, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29566, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29566, 'data-value': derived.doubled }, children);
}
export default Component29566;
