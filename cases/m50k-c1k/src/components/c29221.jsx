import React from 'react';
const LABEL_29221 = 'component_29221';
export function Component29221({ value = 29221, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29221, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29221, 'data-value': derived.doubled }, children);
}
export default Component29221;
