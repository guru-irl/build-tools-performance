import React from 'react';
const LABEL_45611 = 'component_45611';
export function Component45611({ value = 45611, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45611, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45611, 'data-value': derived.doubled }, children);
}
export default Component45611;
