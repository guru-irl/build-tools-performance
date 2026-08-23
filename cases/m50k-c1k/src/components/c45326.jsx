import React from 'react';
const LABEL_45326 = 'component_45326';
export function Component45326({ value = 45326, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45326, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45326, 'data-value': derived.doubled }, children);
}
export default Component45326;
