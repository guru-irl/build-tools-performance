import React from 'react';
const LABEL_17225 = 'component_17225';
export function Component17225({ value = 17225, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17225, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17225, 'data-value': derived.doubled }, children);
}
export default Component17225;
