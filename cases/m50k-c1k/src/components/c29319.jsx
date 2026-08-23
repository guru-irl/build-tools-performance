import React from 'react';
const LABEL_29319 = 'component_29319';
export function Component29319({ value = 29319, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29319, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29319, 'data-value': derived.doubled }, children);
}
export default Component29319;
