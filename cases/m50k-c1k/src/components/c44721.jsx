import React from 'react';
const LABEL_44721 = 'component_44721';
export function Component44721({ value = 44721, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44721, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44721, 'data-value': derived.doubled }, children);
}
export default Component44721;
