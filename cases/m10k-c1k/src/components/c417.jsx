import React from 'react';
const LABEL_417 = 'component_417';
export function Component417({ value = 417, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_417, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_417, 'data-value': derived.doubled }, children);
}
export default Component417;
