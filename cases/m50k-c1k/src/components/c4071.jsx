import React from 'react';
const LABEL_4071 = 'component_4071';
export function Component4071({ value = 4071, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4071, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4071, 'data-value': derived.doubled }, children);
}
export default Component4071;
