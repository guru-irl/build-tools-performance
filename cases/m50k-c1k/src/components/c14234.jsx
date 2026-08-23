import React from 'react';
const LABEL_14234 = 'component_14234';
export function Component14234({ value = 14234, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14234, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14234, 'data-value': derived.doubled }, children);
}
export default Component14234;
