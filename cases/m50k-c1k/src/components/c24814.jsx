import React from 'react';
const LABEL_24814 = 'component_24814';
export function Component24814({ value = 24814, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24814, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24814, 'data-value': derived.doubled }, children);
}
export default Component24814;
