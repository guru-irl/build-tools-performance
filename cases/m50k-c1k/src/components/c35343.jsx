import React from 'react';
const LABEL_35343 = 'component_35343';
export function Component35343({ value = 35343, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35343, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35343, 'data-value': derived.doubled }, children);
}
export default Component35343;
