import React from 'react';
const LABEL_37900 = 'component_37900';
export function Component37900({ value = 37900, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37900, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37900, 'data-value': derived.doubled }, children);
}
export default Component37900;
