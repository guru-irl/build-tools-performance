import React from 'react';
const LABEL_36785 = 'component_36785';
export function Component36785({ value = 36785, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36785, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36785, 'data-value': derived.doubled }, children);
}
export default Component36785;
