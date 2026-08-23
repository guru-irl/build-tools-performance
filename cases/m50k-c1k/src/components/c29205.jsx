import React from 'react';
const LABEL_29205 = 'component_29205';
export function Component29205({ value = 29205, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29205, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29205, 'data-value': derived.doubled }, children);
}
export default Component29205;
