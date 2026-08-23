import React from 'react';
const LABEL_12319 = 'component_12319';
export function Component12319({ value = 12319, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12319, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12319, 'data-value': derived.doubled }, children);
}
export default Component12319;
