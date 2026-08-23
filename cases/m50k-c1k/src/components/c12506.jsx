import React from 'react';
const LABEL_12506 = 'component_12506';
export function Component12506({ value = 12506, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12506, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12506, 'data-value': derived.doubled }, children);
}
export default Component12506;
