import React from 'react';
const LABEL_14468 = 'component_14468';
export function Component14468({ value = 14468, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14468, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14468, 'data-value': derived.doubled }, children);
}
export default Component14468;
