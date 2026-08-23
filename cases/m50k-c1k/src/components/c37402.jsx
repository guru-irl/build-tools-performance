import React from 'react';
const LABEL_37402 = 'component_37402';
export function Component37402({ value = 37402, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37402, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37402, 'data-value': derived.doubled }, children);
}
export default Component37402;
