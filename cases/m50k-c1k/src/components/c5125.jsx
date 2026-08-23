import React from 'react';
const LABEL_5125 = 'component_5125';
export function Component5125({ value = 5125, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5125, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5125, 'data-value': derived.doubled }, children);
}
export default Component5125;
