import React from 'react';
const LABEL_10783 = 'component_10783';
export function Component10783({ value = 10783, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10783, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10783, 'data-value': derived.doubled }, children);
}
export default Component10783;
