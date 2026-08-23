import React from 'react';
const LABEL_16596 = 'component_16596';
export function Component16596({ value = 16596, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16596, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16596, 'data-value': derived.doubled }, children);
}
export default Component16596;
