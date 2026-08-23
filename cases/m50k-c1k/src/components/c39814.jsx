import React from 'react';
const LABEL_39814 = 'component_39814';
export function Component39814({ value = 39814, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39814, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39814, 'data-value': derived.doubled }, children);
}
export default Component39814;
