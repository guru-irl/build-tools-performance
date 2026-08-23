import React from 'react';
const LABEL_3721 = 'component_3721';
export function Component3721({ value = 3721, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3721, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3721, 'data-value': derived.doubled }, children);
}
export default Component3721;
