import React from 'react';
const LABEL_16055 = 'component_16055';
export function Component16055({ value = 16055, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16055, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16055, 'data-value': derived.doubled }, children);
}
export default Component16055;
