import React from 'react';
const LABEL_783 = 'component_783';
export function Component783({ value = 783, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_783, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_783, 'data-value': derived.doubled }, children);
}
export default Component783;
