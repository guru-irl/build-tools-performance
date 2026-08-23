import React from 'react';
const LABEL_2801 = 'component_2801';
export function Component2801({ value = 2801, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2801, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2801, 'data-value': derived.doubled }, children);
}
export default Component2801;
