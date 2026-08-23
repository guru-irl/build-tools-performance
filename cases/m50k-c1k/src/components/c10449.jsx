import React from 'react';
const LABEL_10449 = 'component_10449';
export function Component10449({ value = 10449, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10449, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10449, 'data-value': derived.doubled }, children);
}
export default Component10449;
