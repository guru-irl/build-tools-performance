import React from 'react';
const LABEL_19041 = 'component_19041';
export function Component19041({ value = 19041, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19041, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19041, 'data-value': derived.doubled }, children);
}
export default Component19041;
