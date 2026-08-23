import React from 'react';
const LABEL_6795 = 'component_6795';
export function Component6795({ value = 6795, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6795, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6795, 'data-value': derived.doubled }, children);
}
export default Component6795;
