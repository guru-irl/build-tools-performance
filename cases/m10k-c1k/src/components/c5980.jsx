import React from 'react';
const LABEL_5980 = 'component_5980';
export function Component5980({ value = 5980, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5980, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5980, 'data-value': derived.doubled }, children);
}
export default Component5980;
