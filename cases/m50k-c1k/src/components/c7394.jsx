import React from 'react';
const LABEL_7394 = 'component_7394';
export function Component7394({ value = 7394, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7394, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7394, 'data-value': derived.doubled }, children);
}
export default Component7394;
