import React from 'react';
const LABEL_38896 = 'component_38896';
export function Component38896({ value = 38896, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38896, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38896, 'data-value': derived.doubled }, children);
}
export default Component38896;
