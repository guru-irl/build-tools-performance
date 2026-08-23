import React from 'react';
const LABEL_46721 = 'component_46721';
export function Component46721({ value = 46721, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46721, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46721, 'data-value': derived.doubled }, children);
}
export default Component46721;
