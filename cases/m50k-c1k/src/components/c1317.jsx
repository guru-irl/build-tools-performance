import React from 'react';
const LABEL_1317 = 'component_1317';
export function Component1317({ value = 1317, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1317, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1317, 'data-value': derived.doubled }, children);
}
export default Component1317;
