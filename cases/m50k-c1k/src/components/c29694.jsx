import React from 'react';
const LABEL_29694 = 'component_29694';
export function Component29694({ value = 29694, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29694, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29694, 'data-value': derived.doubled }, children);
}
export default Component29694;
