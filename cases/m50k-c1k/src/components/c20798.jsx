import React from 'react';
const LABEL_20798 = 'component_20798';
export function Component20798({ value = 20798, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20798, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20798, 'data-value': derived.doubled }, children);
}
export default Component20798;
