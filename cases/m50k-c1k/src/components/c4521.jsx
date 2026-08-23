import React from 'react';
const LABEL_4521 = 'component_4521';
export function Component4521({ value = 4521, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4521, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4521, 'data-value': derived.doubled }, children);
}
export default Component4521;
