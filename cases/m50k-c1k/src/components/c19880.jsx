import React from 'react';
const LABEL_19880 = 'component_19880';
export function Component19880({ value = 19880, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19880, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19880, 'data-value': derived.doubled }, children);
}
export default Component19880;
