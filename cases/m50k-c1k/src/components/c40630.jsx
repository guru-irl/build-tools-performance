import React from 'react';
const LABEL_40630 = 'component_40630';
export function Component40630({ value = 40630, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40630, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40630, 'data-value': derived.doubled }, children);
}
export default Component40630;
