import React from 'react';
const LABEL_7910 = 'component_7910';
export function Component7910({ value = 7910, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7910, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7910, 'data-value': derived.doubled }, children);
}
export default Component7910;
