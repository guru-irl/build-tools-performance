import React from 'react';
const LABEL_7897 = 'component_7897';
export function Component7897({ value = 7897, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7897, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7897, 'data-value': derived.doubled }, children);
}
export default Component7897;
