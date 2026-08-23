import React from 'react';
const LABEL_32783 = 'component_32783';
export function Component32783({ value = 32783, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32783, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32783, 'data-value': derived.doubled }, children);
}
export default Component32783;
