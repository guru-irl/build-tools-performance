import React from 'react';
const LABEL_35814 = 'component_35814';
export function Component35814({ value = 35814, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35814, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35814, 'data-value': derived.doubled }, children);
}
export default Component35814;
