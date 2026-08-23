import React from 'react';
const LABEL_5813 = 'component_5813';
export function Component5813({ value = 5813, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5813, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5813, 'data-value': derived.doubled }, children);
}
export default Component5813;
