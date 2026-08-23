import React from 'react';
const LABEL_26814 = 'component_26814';
export function Component26814({ value = 26814, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26814, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26814, 'data-value': derived.doubled }, children);
}
export default Component26814;
