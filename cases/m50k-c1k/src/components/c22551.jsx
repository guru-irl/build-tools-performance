import React from 'react';
const LABEL_22551 = 'component_22551';
export function Component22551({ value = 22551, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22551, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22551, 'data-value': derived.doubled }, children);
}
export default Component22551;
