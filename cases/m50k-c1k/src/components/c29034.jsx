import React from 'react';
const LABEL_29034 = 'component_29034';
export function Component29034({ value = 29034, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29034, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29034, 'data-value': derived.doubled }, children);
}
export default Component29034;
