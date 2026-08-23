import React from 'react';
const LABEL_25933 = 'component_25933';
export function Component25933({ value = 25933, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25933, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25933, 'data-value': derived.doubled }, children);
}
export default Component25933;
