import React from 'react';
const LABEL_31438 = 'component_31438';
export function Component31438({ value = 31438, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31438, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31438, 'data-value': derived.doubled }, children);
}
export default Component31438;
