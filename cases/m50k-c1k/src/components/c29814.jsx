import React from 'react';
const LABEL_29814 = 'component_29814';
export function Component29814({ value = 29814, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29814, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29814, 'data-value': derived.doubled }, children);
}
export default Component29814;
