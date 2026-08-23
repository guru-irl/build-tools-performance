import React from 'react';
const LABEL_10486 = 'component_10486';
export function Component10486({ value = 10486, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10486, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10486, 'data-value': derived.doubled }, children);
}
export default Component10486;
