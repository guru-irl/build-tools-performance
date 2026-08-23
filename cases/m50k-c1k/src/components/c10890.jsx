import React from 'react';
const LABEL_10890 = 'component_10890';
export function Component10890({ value = 10890, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10890, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10890, 'data-value': derived.doubled }, children);
}
export default Component10890;
