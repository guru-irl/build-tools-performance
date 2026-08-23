import React from 'react';
const LABEL_24506 = 'component_24506';
export function Component24506({ value = 24506, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24506, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24506, 'data-value': derived.doubled }, children);
}
export default Component24506;
