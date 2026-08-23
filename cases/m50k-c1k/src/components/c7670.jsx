import React from 'react';
const LABEL_7670 = 'component_7670';
export function Component7670({ value = 7670, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7670, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7670, 'data-value': derived.doubled }, children);
}
export default Component7670;
