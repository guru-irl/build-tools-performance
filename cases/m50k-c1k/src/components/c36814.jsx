import React from 'react';
const LABEL_36814 = 'component_36814';
export function Component36814({ value = 36814, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36814, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36814, 'data-value': derived.doubled }, children);
}
export default Component36814;
