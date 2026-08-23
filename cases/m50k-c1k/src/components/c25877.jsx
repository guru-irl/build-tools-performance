import React from 'react';
const LABEL_25877 = 'component_25877';
export function Component25877({ value = 25877, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25877, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25877, 'data-value': derived.doubled }, children);
}
export default Component25877;
