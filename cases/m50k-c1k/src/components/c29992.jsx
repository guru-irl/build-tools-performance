import React from 'react';
const LABEL_29992 = 'component_29992';
export function Component29992({ value = 29992, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29992, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29992, 'data-value': derived.doubled }, children);
}
export default Component29992;
