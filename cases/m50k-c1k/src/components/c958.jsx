import React from 'react';
const LABEL_958 = 'component_958';
export function Component958({ value = 958, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_958, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_958, 'data-value': derived.doubled }, children);
}
export default Component958;
