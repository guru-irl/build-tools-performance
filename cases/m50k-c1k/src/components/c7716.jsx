import React from 'react';
const LABEL_7716 = 'component_7716';
export function Component7716({ value = 7716, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7716, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7716, 'data-value': derived.doubled }, children);
}
export default Component7716;
