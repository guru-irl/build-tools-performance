import React from 'react';
const LABEL_14772 = 'component_14772';
export function Component14772({ value = 14772, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14772, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14772, 'data-value': derived.doubled }, children);
}
export default Component14772;
