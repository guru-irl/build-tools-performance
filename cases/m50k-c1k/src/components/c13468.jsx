import React from 'react';
const LABEL_13468 = 'component_13468';
export function Component13468({ value = 13468, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13468, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13468, 'data-value': derived.doubled }, children);
}
export default Component13468;
