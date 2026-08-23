import React from 'react';
const LABEL_11630 = 'component_11630';
export function Component11630({ value = 11630, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11630, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11630, 'data-value': derived.doubled }, children);
}
export default Component11630;
