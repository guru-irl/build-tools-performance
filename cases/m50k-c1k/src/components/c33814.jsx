import React from 'react';
const LABEL_33814 = 'component_33814';
export function Component33814({ value = 33814, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33814, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33814, 'data-value': derived.doubled }, children);
}
export default Component33814;
