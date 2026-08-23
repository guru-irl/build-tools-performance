import React from 'react';
const LABEL_36992 = 'component_36992';
export function Component36992({ value = 36992, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36992, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36992, 'data-value': derived.doubled }, children);
}
export default Component36992;
