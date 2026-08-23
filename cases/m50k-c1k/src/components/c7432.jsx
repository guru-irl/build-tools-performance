import React from 'react';
const LABEL_7432 = 'component_7432';
export function Component7432({ value = 7432, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7432, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7432, 'data-value': derived.doubled }, children);
}
export default Component7432;
