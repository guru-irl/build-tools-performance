import React from 'react';
const LABEL_2190 = 'component_2190';
export function Component2190({ value = 2190, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2190, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2190, 'data-value': derived.doubled }, children);
}
export default Component2190;
