import React from 'react';
const LABEL_17195 = 'component_17195';
export function Component17195({ value = 17195, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17195, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17195, 'data-value': derived.doubled }, children);
}
export default Component17195;
