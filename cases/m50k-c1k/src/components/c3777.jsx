import React from 'react';
const LABEL_3777 = 'component_3777';
export function Component3777({ value = 3777, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3777, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3777, 'data-value': derived.doubled }, children);
}
export default Component3777;
