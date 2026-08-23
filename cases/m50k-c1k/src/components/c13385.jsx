import React from 'react';
const LABEL_13385 = 'component_13385';
export function Component13385({ value = 13385, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13385, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13385, 'data-value': derived.doubled }, children);
}
export default Component13385;
