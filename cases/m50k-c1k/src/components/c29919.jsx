import React from 'react';
const LABEL_29919 = 'component_29919';
export function Component29919({ value = 29919, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29919, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29919, 'data-value': derived.doubled }, children);
}
export default Component29919;
