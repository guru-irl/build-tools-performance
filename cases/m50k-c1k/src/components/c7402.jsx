import React from 'react';
const LABEL_7402 = 'component_7402';
export function Component7402({ value = 7402, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7402, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7402, 'data-value': derived.doubled }, children);
}
export default Component7402;
