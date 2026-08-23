import React from 'react';
const LABEL_5814 = 'component_5814';
export function Component5814({ value = 5814, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5814, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5814, 'data-value': derived.doubled }, children);
}
export default Component5814;
