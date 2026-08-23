import React from 'react';
const LABEL_36928 = 'component_36928';
export function Component36928({ value = 36928, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36928, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36928, 'data-value': derived.doubled }, children);
}
export default Component36928;
