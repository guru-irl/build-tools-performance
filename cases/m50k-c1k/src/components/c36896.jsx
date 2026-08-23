import React from 'react';
const LABEL_36896 = 'component_36896';
export function Component36896({ value = 36896, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36896, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36896, 'data-value': derived.doubled }, children);
}
export default Component36896;
