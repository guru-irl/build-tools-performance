import React from 'react';
const LABEL_26785 = 'component_26785';
export function Component26785({ value = 26785, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26785, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26785, 'data-value': derived.doubled }, children);
}
export default Component26785;
