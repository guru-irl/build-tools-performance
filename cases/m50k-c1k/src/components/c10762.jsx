import React from 'react';
const LABEL_10762 = 'component_10762';
export function Component10762({ value = 10762, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10762, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10762, 'data-value': derived.doubled }, children);
}
export default Component10762;
