import React from 'react';
const LABEL_35549 = 'component_35549';
export function Component35549({ value = 35549, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35549, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35549, 'data-value': derived.doubled }, children);
}
export default Component35549;
