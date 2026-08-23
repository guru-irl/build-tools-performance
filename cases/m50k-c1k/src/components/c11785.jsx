import React from 'react';
const LABEL_11785 = 'component_11785';
export function Component11785({ value = 11785, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11785, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11785, 'data-value': derived.doubled }, children);
}
export default Component11785;
