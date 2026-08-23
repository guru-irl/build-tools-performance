import React from 'react';
const LABEL_17741 = 'component_17741';
export function Component17741({ value = 17741, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17741, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17741, 'data-value': derived.doubled }, children);
}
export default Component17741;
