import React from 'react';
const LABEL_46468 = 'component_46468';
export function Component46468({ value = 46468, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46468, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46468, 'data-value': derived.doubled }, children);
}
export default Component46468;
