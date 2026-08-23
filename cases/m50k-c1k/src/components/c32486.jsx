import React from 'react';
const LABEL_32486 = 'component_32486';
export function Component32486({ value = 32486, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32486, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32486, 'data-value': derived.doubled }, children);
}
export default Component32486;
