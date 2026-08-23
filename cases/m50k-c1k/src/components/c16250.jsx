import React from 'react';
const LABEL_16250 = 'component_16250';
export function Component16250({ value = 16250, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16250, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16250, 'data-value': derived.doubled }, children);
}
export default Component16250;
