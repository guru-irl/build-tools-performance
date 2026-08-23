import React from 'react';
const LABEL_15055 = 'component_15055';
export function Component15055({ value = 15055, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15055, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15055, 'data-value': derived.doubled }, children);
}
export default Component15055;
