import React from 'react';
const LABEL_26501 = 'component_26501';
export function Component26501({ value = 26501, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26501, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26501, 'data-value': derived.doubled }, children);
}
export default Component26501;
