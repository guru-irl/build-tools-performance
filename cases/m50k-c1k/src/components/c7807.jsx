import React from 'react';
const LABEL_7807 = 'component_7807';
export function Component7807({ value = 7807, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7807, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7807, 'data-value': derived.doubled }, children);
}
export default Component7807;
