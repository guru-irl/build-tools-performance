import React from 'react';
const LABEL_3896 = 'component_3896';
export function Component3896({ value = 3896, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3896, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3896, 'data-value': derived.doubled }, children);
}
export default Component3896;
