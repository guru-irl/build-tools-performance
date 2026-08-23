import React from 'react';
const LABEL_7547 = 'component_7547';
export function Component7547({ value = 7547, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7547, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7547, 'data-value': derived.doubled }, children);
}
export default Component7547;
