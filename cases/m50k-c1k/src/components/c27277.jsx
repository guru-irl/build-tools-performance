import React from 'react';
const LABEL_27277 = 'component_27277';
export function Component27277({ value = 27277, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27277, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27277, 'data-value': derived.doubled }, children);
}
export default Component27277;
