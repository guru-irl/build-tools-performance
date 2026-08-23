import React from 'react';
const LABEL_25814 = 'component_25814';
export function Component25814({ value = 25814, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25814, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25814, 'data-value': derived.doubled }, children);
}
export default Component25814;
