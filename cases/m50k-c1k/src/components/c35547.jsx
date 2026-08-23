import React from 'react';
const LABEL_35547 = 'component_35547';
export function Component35547({ value = 35547, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35547, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35547, 'data-value': derived.doubled }, children);
}
export default Component35547;
