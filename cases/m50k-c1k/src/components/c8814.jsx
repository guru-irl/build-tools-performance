import React from 'react';
const LABEL_8814 = 'component_8814';
export function Component8814({ value = 8814, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8814, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8814, 'data-value': derived.doubled }, children);
}
export default Component8814;
