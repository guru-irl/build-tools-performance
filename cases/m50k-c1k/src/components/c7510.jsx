import React from 'react';
const LABEL_7510 = 'component_7510';
export function Component7510({ value = 7510, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7510, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7510, 'data-value': derived.doubled }, children);
}
export default Component7510;
