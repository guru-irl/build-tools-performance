import React from 'react';
const LABEL_17954 = 'component_17954';
export function Component17954({ value = 17954, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17954, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17954, 'data-value': derived.doubled }, children);
}
export default Component17954;
