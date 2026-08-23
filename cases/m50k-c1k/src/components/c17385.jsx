import React from 'react';
const LABEL_17385 = 'component_17385';
export function Component17385({ value = 17385, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17385, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17385, 'data-value': derived.doubled }, children);
}
export default Component17385;
