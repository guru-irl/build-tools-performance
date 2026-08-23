import React from 'react';
const LABEL_40402 = 'component_40402';
export function Component40402({ value = 40402, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40402, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40402, 'data-value': derived.doubled }, children);
}
export default Component40402;
