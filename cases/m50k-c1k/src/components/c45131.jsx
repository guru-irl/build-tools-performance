import React from 'react';
const LABEL_45131 = 'component_45131';
export function Component45131({ value = 45131, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45131, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45131, 'data-value': derived.doubled }, children);
}
export default Component45131;
