import React from 'react';
const LABEL_28896 = 'component_28896';
export function Component28896({ value = 28896, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28896, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28896, 'data-value': derived.doubled }, children);
}
export default Component28896;
