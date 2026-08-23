import React from 'react';
const LABEL_5521 = 'component_5521';
export function Component5521({ value = 5521, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5521, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5521, 'data-value': derived.doubled }, children);
}
export default Component5521;
