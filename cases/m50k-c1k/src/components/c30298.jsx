import React from 'react';
const LABEL_30298 = 'component_30298';
export function Component30298({ value = 30298, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30298, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30298, 'data-value': derived.doubled }, children);
}
export default Component30298;
