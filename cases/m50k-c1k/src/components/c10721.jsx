import React from 'react';
const LABEL_10721 = 'component_10721';
export function Component10721({ value = 10721, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10721, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10721, 'data-value': derived.doubled }, children);
}
export default Component10721;
