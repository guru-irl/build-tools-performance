import React from 'react';
const LABEL_7071 = 'component_7071';
export function Component7071({ value = 7071, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7071, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7071, 'data-value': derived.doubled }, children);
}
export default Component7071;
