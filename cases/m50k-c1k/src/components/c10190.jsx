import React from 'react';
const LABEL_10190 = 'component_10190';
export function Component10190({ value = 10190, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10190, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10190, 'data-value': derived.doubled }, children);
}
export default Component10190;
