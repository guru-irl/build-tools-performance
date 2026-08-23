import React from 'react';
const LABEL_16486 = 'component_16486';
export function Component16486({ value = 16486, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16486, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16486, 'data-value': derived.doubled }, children);
}
export default Component16486;
