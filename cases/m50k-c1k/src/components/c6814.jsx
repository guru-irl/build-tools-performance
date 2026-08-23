import React from 'react';
const LABEL_6814 = 'component_6814';
export function Component6814({ value = 6814, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6814, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6814, 'data-value': derived.doubled }, children);
}
export default Component6814;
