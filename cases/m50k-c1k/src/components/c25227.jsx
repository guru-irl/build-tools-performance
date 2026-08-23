import React from 'react';
const LABEL_25227 = 'component_25227';
export function Component25227({ value = 25227, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25227, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25227, 'data-value': derived.doubled }, children);
}
export default Component25227;
