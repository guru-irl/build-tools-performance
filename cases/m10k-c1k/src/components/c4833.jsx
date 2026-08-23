import React from 'react';
const LABEL_4833 = 'component_4833';
export function Component4833({ value = 4833, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4833, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4833, 'data-value': derived.doubled }, children);
}
export default Component4833;
