import React from 'react';
const LABEL_38702 = 'component_38702';
export function Component38702({ value = 38702, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38702, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38702, 'data-value': derived.doubled }, children);
}
export default Component38702;
