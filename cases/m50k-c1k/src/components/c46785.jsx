import React from 'react';
const LABEL_46785 = 'component_46785';
export function Component46785({ value = 46785, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46785, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46785, 'data-value': derived.doubled }, children);
}
export default Component46785;
