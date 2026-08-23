import React from 'react';
const LABEL_42814 = 'component_42814';
export function Component42814({ value = 42814, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42814, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42814, 'data-value': derived.doubled }, children);
}
export default Component42814;
