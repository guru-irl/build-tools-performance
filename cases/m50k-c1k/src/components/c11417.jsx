import React from 'react';
const LABEL_11417 = 'component_11417';
export function Component11417({ value = 11417, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11417, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11417, 'data-value': derived.doubled }, children);
}
export default Component11417;
