import React from 'react';
const LABEL_13783 = 'component_13783';
export function Component13783({ value = 13783, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13783, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13783, 'data-value': derived.doubled }, children);
}
export default Component13783;
