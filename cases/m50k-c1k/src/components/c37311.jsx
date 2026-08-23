import React from 'react';
const LABEL_37311 = 'component_37311';
export function Component37311({ value = 37311, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37311, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37311, 'data-value': derived.doubled }, children);
}
export default Component37311;
