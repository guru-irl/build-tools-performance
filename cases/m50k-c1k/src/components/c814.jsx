import React from 'react';
const LABEL_814 = 'component_814';
export function Component814({ value = 814, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_814, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_814, 'data-value': derived.doubled }, children);
}
export default Component814;
