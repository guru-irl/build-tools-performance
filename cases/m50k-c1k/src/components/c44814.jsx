import React from 'react';
const LABEL_44814 = 'component_44814';
export function Component44814({ value = 44814, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44814, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44814, 'data-value': derived.doubled }, children);
}
export default Component44814;
