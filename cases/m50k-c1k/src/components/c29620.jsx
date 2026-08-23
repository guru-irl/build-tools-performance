import React from 'react';
const LABEL_29620 = 'component_29620';
export function Component29620({ value = 29620, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29620, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29620, 'data-value': derived.doubled }, children);
}
export default Component29620;
