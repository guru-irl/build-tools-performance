import React from 'react';
const LABEL_44071 = 'component_44071';
export function Component44071({ value = 44071, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44071, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44071, 'data-value': derived.doubled }, children);
}
export default Component44071;
