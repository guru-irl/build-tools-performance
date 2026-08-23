import React from 'react';
const LABEL_28501 = 'component_28501';
export function Component28501({ value = 28501, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28501, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28501, 'data-value': derived.doubled }, children);
}
export default Component28501;
