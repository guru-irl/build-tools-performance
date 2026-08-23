import React from 'react';
const LABEL_7527 = 'component_7527';
export function Component7527({ value = 7527, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7527, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7527, 'data-value': derived.doubled }, children);
}
export default Component7527;
