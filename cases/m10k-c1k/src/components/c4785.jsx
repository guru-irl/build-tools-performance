import React from 'react';
const LABEL_4785 = 'component_4785';
export function Component4785({ value = 4785, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4785, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4785, 'data-value': derived.doubled }, children);
}
export default Component4785;
