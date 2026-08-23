import React from 'react';
const LABEL_7301 = 'component_7301';
export function Component7301({ value = 7301, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7301, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7301, 'data-value': derived.doubled }, children);
}
export default Component7301;
