import React from 'react';
const LABEL_7500 = 'component_7500';
export function Component7500({ value = 7500, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7500, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7500, 'data-value': derived.doubled }, children);
}
export default Component7500;
