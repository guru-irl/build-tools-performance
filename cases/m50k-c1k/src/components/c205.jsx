import React from 'react';
const LABEL_205 = 'component_205';
export function Component205({ value = 205, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_205, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_205, 'data-value': derived.doubled }, children);
}
export default Component205;
