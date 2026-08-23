import React from 'react';
const LABEL_5061 = 'component_5061';
export function Component5061({ value = 5061, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5061, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5061, 'data-value': derived.doubled }, children);
}
export default Component5061;
