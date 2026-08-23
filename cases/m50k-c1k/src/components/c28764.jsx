import React from 'react';
const LABEL_28764 = 'component_28764';
export function Component28764({ value = 28764, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28764, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28764, 'data-value': derived.doubled }, children);
}
export default Component28764;
