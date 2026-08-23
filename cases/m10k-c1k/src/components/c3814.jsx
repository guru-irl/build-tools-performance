import React from 'react';
const LABEL_3814 = 'component_3814';
export function Component3814({ value = 3814, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3814, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3814, 'data-value': derived.doubled }, children);
}
export default Component3814;
