import React from 'react';
const LABEL_13816 = 'component_13816';
export function Component13816({ value = 13816, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13816, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13816, 'data-value': derived.doubled }, children);
}
export default Component13816;
