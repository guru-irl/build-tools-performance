import React from 'react';
const LABEL_1896 = 'component_1896';
export function Component1896({ value = 1896, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1896, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1896, 'data-value': derived.doubled }, children);
}
export default Component1896;
