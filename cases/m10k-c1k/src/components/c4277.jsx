import React from 'react';
const LABEL_4277 = 'component_4277';
export function Component4277({ value = 4277, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4277, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4277, 'data-value': derived.doubled }, children);
}
export default Component4277;
