import React from 'react';
const LABEL_20130 = 'component_20130';
export function Component20130({ value = 20130, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20130, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20130, 'data-value': derived.doubled }, children);
}
export default Component20130;
