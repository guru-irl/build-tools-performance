import React from 'react';
const LABEL_27942 = 'component_27942';
export function Component27942({ value = 27942, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27942, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27942, 'data-value': derived.doubled }, children);
}
export default Component27942;
