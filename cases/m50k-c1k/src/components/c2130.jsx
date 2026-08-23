import React from 'react';
const LABEL_2130 = 'component_2130';
export function Component2130({ value = 2130, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2130, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2130, 'data-value': derived.doubled }, children);
}
export default Component2130;
