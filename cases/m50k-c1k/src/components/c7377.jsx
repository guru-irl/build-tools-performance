import React from 'react';
const LABEL_7377 = 'component_7377';
export function Component7377({ value = 7377, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7377, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7377, 'data-value': derived.doubled }, children);
}
export default Component7377;
