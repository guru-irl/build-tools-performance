import React from 'react';
const LABEL_46012 = 'component_46012';
export function Component46012({ value = 46012, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46012, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46012, 'data-value': derived.doubled }, children);
}
export default Component46012;
