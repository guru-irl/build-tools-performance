import React from 'react';
const LABEL_40814 = 'component_40814';
export function Component40814({ value = 40814, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40814, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40814, 'data-value': derived.doubled }, children);
}
export default Component40814;
