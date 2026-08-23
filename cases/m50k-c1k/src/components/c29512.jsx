import React from 'react';
const LABEL_29512 = 'component_29512';
export function Component29512({ value = 29512, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29512, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29512, 'data-value': derived.doubled }, children);
}
export default Component29512;
