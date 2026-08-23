import React from 'react';
const LABEL_486 = 'component_486';
export function Component486({ value = 486, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_486, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_486, 'data-value': derived.doubled }, children);
}
export default Component486;
