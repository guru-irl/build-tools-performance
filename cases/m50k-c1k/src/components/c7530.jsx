import React from 'react';
const LABEL_7530 = 'component_7530';
export function Component7530({ value = 7530, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7530, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7530, 'data-value': derived.doubled }, children);
}
export default Component7530;
