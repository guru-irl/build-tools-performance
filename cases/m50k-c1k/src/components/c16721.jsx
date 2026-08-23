import React from 'react';
const LABEL_16721 = 'component_16721';
export function Component16721({ value = 16721, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16721, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16721, 'data-value': derived.doubled }, children);
}
export default Component16721;
