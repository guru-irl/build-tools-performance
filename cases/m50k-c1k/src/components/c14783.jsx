import React from 'react';
const LABEL_14783 = 'component_14783';
export function Component14783({ value = 14783, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14783, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14783, 'data-value': derived.doubled }, children);
}
export default Component14783;
