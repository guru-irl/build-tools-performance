import React from 'react';
const LABEL_785 = 'component_785';
export function Component785({ value = 785, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_785, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_785, 'data-value': derived.doubled }, children);
}
export default Component785;
