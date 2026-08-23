import React from 'react';
const LABEL_26651 = 'component_26651';
export function Component26651({ value = 26651, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26651, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26651, 'data-value': derived.doubled }, children);
}
export default Component26651;
