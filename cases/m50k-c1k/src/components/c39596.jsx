import React from 'react';
const LABEL_39596 = 'component_39596';
export function Component39596({ value = 39596, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39596, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39596, 'data-value': derived.doubled }, children);
}
export default Component39596;
