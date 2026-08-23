import React from 'react';
const LABEL_16896 = 'component_16896';
export function Component16896({ value = 16896, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16896, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16896, 'data-value': derived.doubled }, children);
}
export default Component16896;
