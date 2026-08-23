import React from 'react';
const LABEL_4053 = 'component_4053';
export function Component4053({ value = 4053, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4053, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4053, 'data-value': derived.doubled }, children);
}
export default Component4053;
