import React from 'react';
const LABEL_5234 = 'component_5234';
export function Component5234({ value = 5234, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5234, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5234, 'data-value': derived.doubled }, children);
}
export default Component5234;
