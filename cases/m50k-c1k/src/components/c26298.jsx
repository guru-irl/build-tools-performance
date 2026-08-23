import React from 'react';
const LABEL_26298 = 'component_26298';
export function Component26298({ value = 26298, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26298, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26298, 'data-value': derived.doubled }, children);
}
export default Component26298;
