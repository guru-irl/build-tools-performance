import React from 'react';
const LABEL_19015 = 'component_19015';
export function Component19015({ value = 19015, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19015, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19015, 'data-value': derived.doubled }, children);
}
export default Component19015;
