import React from 'react';
const LABEL_7201 = 'component_7201';
export function Component7201({ value = 7201, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7201, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7201, 'data-value': derived.doubled }, children);
}
export default Component7201;
