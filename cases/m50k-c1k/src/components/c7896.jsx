import React from 'react';
const LABEL_7896 = 'component_7896';
export function Component7896({ value = 7896, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7896, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7896, 'data-value': derived.doubled }, children);
}
export default Component7896;
