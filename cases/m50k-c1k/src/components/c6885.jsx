import React from 'react';
const LABEL_6885 = 'component_6885';
export function Component6885({ value = 6885, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6885, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6885, 'data-value': derived.doubled }, children);
}
export default Component6885;
