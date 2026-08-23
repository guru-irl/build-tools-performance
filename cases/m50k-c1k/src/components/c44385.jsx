import React from 'react';
const LABEL_44385 = 'component_44385';
export function Component44385({ value = 44385, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44385, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44385, 'data-value': derived.doubled }, children);
}
export default Component44385;
