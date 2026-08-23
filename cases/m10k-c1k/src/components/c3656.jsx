import React from 'react';
const LABEL_3656 = 'component_3656';
export function Component3656({ value = 3656, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3656, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3656, 'data-value': derived.doubled }, children);
}
export default Component3656;
