import React from 'react';
const LABEL_28500 = 'component_28500';
export function Component28500({ value = 28500, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28500, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28500, 'data-value': derived.doubled }, children);
}
export default Component28500;
