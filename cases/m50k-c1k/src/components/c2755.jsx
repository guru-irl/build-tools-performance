import React from 'react';
const LABEL_2755 = 'component_2755';
export function Component2755({ value = 2755, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2755, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2755, 'data-value': derived.doubled }, children);
}
export default Component2755;
