import React from 'react';
const LABEL_19785 = 'component_19785';
export function Component19785({ value = 19785, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19785, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19785, 'data-value': derived.doubled }, children);
}
export default Component19785;
