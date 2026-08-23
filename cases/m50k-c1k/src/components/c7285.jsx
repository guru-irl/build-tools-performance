import React from 'react';
const LABEL_7285 = 'component_7285';
export function Component7285({ value = 7285, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7285, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7285, 'data-value': derived.doubled }, children);
}
export default Component7285;
