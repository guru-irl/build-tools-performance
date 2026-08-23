import React from 'react';
const LABEL_17431 = 'component_17431';
export function Component17431({ value = 17431, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17431, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17431, 'data-value': derived.doubled }, children);
}
export default Component17431;
