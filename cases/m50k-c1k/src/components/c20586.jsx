import React from 'react';
const LABEL_20586 = 'component_20586';
export function Component20586({ value = 20586, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20586, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20586, 'data-value': derived.doubled }, children);
}
export default Component20586;
