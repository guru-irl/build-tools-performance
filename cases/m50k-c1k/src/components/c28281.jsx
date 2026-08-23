import React from 'react';
const LABEL_28281 = 'component_28281';
export function Component28281({ value = 28281, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28281, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28281, 'data-value': derived.doubled }, children);
}
export default Component28281;
