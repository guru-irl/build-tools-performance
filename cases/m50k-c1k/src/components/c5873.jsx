import React from 'react';
const LABEL_5873 = 'component_5873';
export function Component5873({ value = 5873, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5873, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5873, 'data-value': derived.doubled }, children);
}
export default Component5873;
