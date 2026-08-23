import React from 'react';
const LABEL_2055 = 'component_2055';
export function Component2055({ value = 2055, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2055, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2055, 'data-value': derived.doubled }, children);
}
export default Component2055;
