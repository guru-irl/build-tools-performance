import React from 'react';
const LABEL_10499 = 'component_10499';
export function Component10499({ value = 10499, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10499, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10499, 'data-value': derived.doubled }, children);
}
export default Component10499;
