import React from 'react';
const LABEL_19482 = 'component_19482';
export function Component19482({ value = 19482, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19482, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19482, 'data-value': derived.doubled }, children);
}
export default Component19482;
