import React from 'react';
const LABEL_44842 = 'component_44842';
export function Component44842({ value = 44842, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44842, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44842, 'data-value': derived.doubled }, children);
}
export default Component44842;
