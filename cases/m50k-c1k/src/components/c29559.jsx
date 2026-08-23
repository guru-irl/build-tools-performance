import React from 'react';
const LABEL_29559 = 'component_29559';
export function Component29559({ value = 29559, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29559, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29559, 'data-value': derived.doubled }, children);
}
export default Component29559;
