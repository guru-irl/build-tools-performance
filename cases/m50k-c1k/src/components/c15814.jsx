import React from 'react';
const LABEL_15814 = 'component_15814';
export function Component15814({ value = 15814, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15814, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15814, 'data-value': derived.doubled }, children);
}
export default Component15814;
