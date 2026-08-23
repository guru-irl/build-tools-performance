import React from 'react';
const LABEL_7798 = 'component_7798';
export function Component7798({ value = 7798, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7798, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7798, 'data-value': derived.doubled }, children);
}
export default Component7798;
