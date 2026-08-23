import React from 'react';
const LABEL_29088 = 'component_29088';
export function Component29088({ value = 29088, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29088, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29088, 'data-value': derived.doubled }, children);
}
export default Component29088;
