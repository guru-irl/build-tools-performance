import React from 'react';
const LABEL_10704 = 'component_10704';
export function Component10704({ value = 10704, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10704, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10704, 'data-value': derived.doubled }, children);
}
export default Component10704;
