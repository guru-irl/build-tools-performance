import React from 'react';
const LABEL_23781 = 'component_23781';
export function Component23781({ value = 23781, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23781, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23781, 'data-value': derived.doubled }, children);
}
export default Component23781;
