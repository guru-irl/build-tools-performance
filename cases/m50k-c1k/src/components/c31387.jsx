import React from 'react';
const LABEL_31387 = 'component_31387';
export function Component31387({ value = 31387, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31387, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31387, 'data-value': derived.doubled }, children);
}
export default Component31387;
