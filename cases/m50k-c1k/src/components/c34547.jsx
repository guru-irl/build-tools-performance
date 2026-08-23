import React from 'react';
const LABEL_34547 = 'component_34547';
export function Component34547({ value = 34547, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34547, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34547, 'data-value': derived.doubled }, children);
}
export default Component34547;
