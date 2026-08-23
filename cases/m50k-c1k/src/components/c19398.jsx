import React from 'react';
const LABEL_19398 = 'component_19398';
export function Component19398({ value = 19398, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19398, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19398, 'data-value': derived.doubled }, children);
}
export default Component19398;
