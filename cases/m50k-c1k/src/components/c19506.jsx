import React from 'react';
const LABEL_19506 = 'component_19506';
export function Component19506({ value = 19506, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19506, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19506, 'data-value': derived.doubled }, children);
}
export default Component19506;
