import React from 'react';
const LABEL_2507 = 'component_2507';
export function Component2507({ value = 2507, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2507, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2507, 'data-value': derived.doubled }, children);
}
export default Component2507;
