import React from 'react';
const LABEL_20111 = 'component_20111';
export function Component20111({ value = 20111, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20111, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20111, 'data-value': derived.doubled }, children);
}
export default Component20111;
