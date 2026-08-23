import React from 'react';
const LABEL_13105 = 'component_13105';
export function Component13105({ value = 13105, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13105, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13105, 'data-value': derived.doubled }, children);
}
export default Component13105;
