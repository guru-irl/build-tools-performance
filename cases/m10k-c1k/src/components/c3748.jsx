import React from 'react';
const LABEL_3748 = 'component_3748';
export function Component3748({ value = 3748, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3748, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3748, 'data-value': derived.doubled }, children);
}
export default Component3748;
