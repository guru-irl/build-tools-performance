import React from 'react';
const LABEL_38814 = 'component_38814';
export function Component38814({ value = 38814, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38814, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38814, 'data-value': derived.doubled }, children);
}
export default Component38814;
