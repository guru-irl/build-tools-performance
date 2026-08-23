import React from 'react';
const LABEL_45277 = 'component_45277';
export function Component45277({ value = 45277, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45277, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45277, 'data-value': derived.doubled }, children);
}
export default Component45277;
