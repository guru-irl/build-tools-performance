import React from 'react';
const LABEL_11721 = 'component_11721';
export function Component11721({ value = 11721, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11721, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11721, 'data-value': derived.doubled }, children);
}
export default Component11721;
