import React from 'react';
const LABEL_11260 = 'component_11260';
export function Component11260({ value = 11260, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11260, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11260, 'data-value': derived.doubled }, children);
}
export default Component11260;
