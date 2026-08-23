import React from 'react';
const LABEL_6783 = 'component_6783';
export function Component6783({ value = 6783, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6783, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6783, 'data-value': derived.doubled }, children);
}
export default Component6783;
