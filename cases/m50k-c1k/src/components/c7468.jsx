import React from 'react';
const LABEL_7468 = 'component_7468';
export function Component7468({ value = 7468, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7468, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7468, 'data-value': derived.doubled }, children);
}
export default Component7468;
