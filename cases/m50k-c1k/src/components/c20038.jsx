import React from 'react';
const LABEL_20038 = 'component_20038';
export function Component20038({ value = 20038, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20038, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20038, 'data-value': derived.doubled }, children);
}
export default Component20038;
