import React from 'react';
const LABEL_23995 = 'component_23995';
export function Component23995({ value = 23995, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23995, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23995, 'data-value': derived.doubled }, children);
}
export default Component23995;
