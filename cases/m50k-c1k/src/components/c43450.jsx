import React from 'react';
const LABEL_43450 = 'component_43450';
export function Component43450({ value = 43450, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43450, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43450, 'data-value': derived.doubled }, children);
}
export default Component43450;
