import React from 'react';
const LABEL_8721 = 'component_8721';
export function Component8721({ value = 8721, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8721, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8721, 'data-value': derived.doubled }, children);
}
export default Component8721;
