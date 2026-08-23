import React from 'react';
const LABEL_8630 = 'component_8630';
export function Component8630({ value = 8630, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8630, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8630, 'data-value': derived.doubled }, children);
}
export default Component8630;
