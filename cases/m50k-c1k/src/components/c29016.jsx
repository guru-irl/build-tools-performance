import React from 'react';
const LABEL_29016 = 'component_29016';
export function Component29016({ value = 29016, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29016, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29016, 'data-value': derived.doubled }, children);
}
export default Component29016;
