import React from 'react';
const LABEL_7438 = 'component_7438';
export function Component7438({ value = 7438, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7438, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7438, 'data-value': derived.doubled }, children);
}
export default Component7438;
