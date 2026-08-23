import React from 'react';
const LABEL_26438 = 'component_26438';
export function Component26438({ value = 26438, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26438, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26438, 'data-value': derived.doubled }, children);
}
export default Component26438;
