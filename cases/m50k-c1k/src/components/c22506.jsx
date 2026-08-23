import React from 'react';
const LABEL_22506 = 'component_22506';
export function Component22506({ value = 22506, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22506, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22506, 'data-value': derived.doubled }, children);
}
export default Component22506;
