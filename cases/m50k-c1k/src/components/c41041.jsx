import React from 'react';
const LABEL_41041 = 'component_41041';
export function Component41041({ value = 41041, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41041, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41041, 'data-value': derived.doubled }, children);
}
export default Component41041;
