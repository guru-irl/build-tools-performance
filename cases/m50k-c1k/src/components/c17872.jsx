import React from 'react';
const LABEL_17872 = 'component_17872';
export function Component17872({ value = 17872, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17872, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17872, 'data-value': derived.doubled }, children);
}
export default Component17872;
