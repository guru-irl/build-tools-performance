import React from 'react';
const LABEL_23721 = 'component_23721';
export function Component23721({ value = 23721, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23721, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23721, 'data-value': derived.doubled }, children);
}
export default Component23721;
