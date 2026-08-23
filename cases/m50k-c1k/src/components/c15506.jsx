import React from 'react';
const LABEL_15506 = 'component_15506';
export function Component15506({ value = 15506, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15506, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15506, 'data-value': derived.doubled }, children);
}
export default Component15506;
