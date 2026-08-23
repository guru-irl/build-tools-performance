import React from 'react';
const LABEL_29499 = 'component_29499';
export function Component29499({ value = 29499, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29499, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29499, 'data-value': derived.doubled }, children);
}
export default Component29499;
