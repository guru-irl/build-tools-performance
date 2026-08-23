import React from 'react';
const LABEL_5955 = 'component_5955';
export function Component5955({ value = 5955, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5955, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5955, 'data-value': derived.doubled }, children);
}
export default Component5955;
