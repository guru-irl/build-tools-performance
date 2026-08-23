import React from 'react';
const LABEL_40192 = 'component_40192';
export function Component40192({ value = 40192, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40192, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40192, 'data-value': derived.doubled }, children);
}
export default Component40192;
