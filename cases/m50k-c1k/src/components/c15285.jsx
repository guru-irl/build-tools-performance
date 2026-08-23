import React from 'react';
const LABEL_15285 = 'component_15285';
export function Component15285({ value = 15285, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15285, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15285, 'data-value': derived.doubled }, children);
}
export default Component15285;
