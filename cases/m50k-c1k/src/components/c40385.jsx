import React from 'react';
const LABEL_40385 = 'component_40385';
export function Component40385({ value = 40385, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40385, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40385, 'data-value': derived.doubled }, children);
}
export default Component40385;
