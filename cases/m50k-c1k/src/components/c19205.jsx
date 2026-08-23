import React from 'react';
const LABEL_19205 = 'component_19205';
export function Component19205({ value = 19205, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19205, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19205, 'data-value': derived.doubled }, children);
}
export default Component19205;
