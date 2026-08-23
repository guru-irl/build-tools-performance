import React from 'react';
const LABEL_3205 = 'component_3205';
export function Component3205({ value = 3205, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3205, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3205, 'data-value': derived.doubled }, children);
}
export default Component3205;
