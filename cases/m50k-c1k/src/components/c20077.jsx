import React from 'react';
const LABEL_20077 = 'component_20077';
export function Component20077({ value = 20077, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20077, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20077, 'data-value': derived.doubled }, children);
}
export default Component20077;
