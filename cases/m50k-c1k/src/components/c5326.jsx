import React from 'react';
const LABEL_5326 = 'component_5326';
export function Component5326({ value = 5326, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5326, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5326, 'data-value': derived.doubled }, children);
}
export default Component5326;
