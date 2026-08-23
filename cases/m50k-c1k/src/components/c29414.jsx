import React from 'react';
const LABEL_29414 = 'component_29414';
export function Component29414({ value = 29414, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29414, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29414, 'data-value': derived.doubled }, children);
}
export default Component29414;
