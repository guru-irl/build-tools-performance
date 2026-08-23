import React from 'react';
const LABEL_25896 = 'component_25896';
export function Component25896({ value = 25896, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25896, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25896, 'data-value': derived.doubled }, children);
}
export default Component25896;
