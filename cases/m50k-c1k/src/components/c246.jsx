import React from 'react';
const LABEL_246 = 'component_246';
export function Component246({ value = 246, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_246, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_246, 'data-value': derived.doubled }, children);
}
export default Component246;
