import React from 'react';
const LABEL_10833 = 'component_10833';
export function Component10833({ value = 10833, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10833, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10833, 'data-value': derived.doubled }, children);
}
export default Component10833;
