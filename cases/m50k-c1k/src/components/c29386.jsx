import React from 'react';
const LABEL_29386 = 'component_29386';
export function Component29386({ value = 29386, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29386, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29386, 'data-value': derived.doubled }, children);
}
export default Component29386;
