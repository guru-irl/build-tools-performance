import React from 'react';
const LABEL_40521 = 'component_40521';
export function Component40521({ value = 40521, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40521, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40521, 'data-value': derived.doubled }, children);
}
export default Component40521;
