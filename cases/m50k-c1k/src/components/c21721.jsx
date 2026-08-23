import React from 'react';
const LABEL_21721 = 'component_21721';
export function Component21721({ value = 21721, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21721, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21721, 'data-value': derived.doubled }, children);
}
export default Component21721;
