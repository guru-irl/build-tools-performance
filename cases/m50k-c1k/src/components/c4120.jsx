import React from 'react';
const LABEL_4120 = 'component_4120';
export function Component4120({ value = 4120, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4120, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4120, 'data-value': derived.doubled }, children);
}
export default Component4120;
