import React from 'react';
const LABEL_40000 = 'component_40000';
export function Component40000({ value = 40000, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40000, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40000, 'data-value': derived.doubled }, children);
}
export default Component40000;
