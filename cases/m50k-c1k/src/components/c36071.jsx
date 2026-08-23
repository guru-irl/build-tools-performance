import React from 'react';
const LABEL_36071 = 'component_36071';
export function Component36071({ value = 36071, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36071, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36071, 'data-value': derived.doubled }, children);
}
export default Component36071;
