import React from 'react';
const LABEL_37785 = 'component_37785';
export function Component37785({ value = 37785, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37785, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37785, 'data-value': derived.doubled }, children);
}
export default Component37785;
