import React from 'react';
const LABEL_28721 = 'component_28721';
export function Component28721({ value = 28721, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28721, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28721, 'data-value': derived.doubled }, children);
}
export default Component28721;
