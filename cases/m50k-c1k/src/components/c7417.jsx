import React from 'react';
const LABEL_7417 = 'component_7417';
export function Component7417({ value = 7417, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7417, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7417, 'data-value': derived.doubled }, children);
}
export default Component7417;
