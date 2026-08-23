import React from 'react';
const LABEL_40204 = 'component_40204';
export function Component40204({ value = 40204, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40204, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40204, 'data-value': derived.doubled }, children);
}
export default Component40204;
