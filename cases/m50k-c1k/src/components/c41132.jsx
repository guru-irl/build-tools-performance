import React from 'react';
const LABEL_41132 = 'component_41132';
export function Component41132({ value = 41132, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41132, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41132, 'data-value': derived.doubled }, children);
}
export default Component41132;
