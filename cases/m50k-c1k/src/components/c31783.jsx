import React from 'react';
const LABEL_31783 = 'component_31783';
export function Component31783({ value = 31783, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31783, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31783, 'data-value': derived.doubled }, children);
}
export default Component31783;
