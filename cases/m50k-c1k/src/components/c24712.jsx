import React from 'react';
const LABEL_24712 = 'component_24712';
export function Component24712({ value = 24712, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24712, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24712, 'data-value': derived.doubled }, children);
}
export default Component24712;
