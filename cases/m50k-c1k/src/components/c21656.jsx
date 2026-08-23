import React from 'react';
const LABEL_21656 = 'component_21656';
export function Component21656({ value = 21656, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21656, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21656, 'data-value': derived.doubled }, children);
}
export default Component21656;
