import React from 'react';
const LABEL_4131 = 'component_4131';
export function Component4131({ value = 4131, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4131, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4131, 'data-value': derived.doubled }, children);
}
export default Component4131;
