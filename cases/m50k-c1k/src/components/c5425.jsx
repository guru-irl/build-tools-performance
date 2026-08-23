import React from 'react';
const LABEL_5425 = 'component_5425';
export function Component5425({ value = 5425, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5425, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5425, 'data-value': derived.doubled }, children);
}
export default Component5425;
