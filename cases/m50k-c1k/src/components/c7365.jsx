import React from 'react';
const LABEL_7365 = 'component_7365';
export function Component7365({ value = 7365, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7365, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7365, 'data-value': derived.doubled }, children);
}
export default Component7365;
