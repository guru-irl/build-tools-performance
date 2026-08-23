import React from 'react';
const LABEL_10814 = 'component_10814';
export function Component10814({ value = 10814, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10814, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10814, 'data-value': derived.doubled }, children);
}
export default Component10814;
