import React from 'react';
const LABEL_7311 = 'component_7311';
export function Component7311({ value = 7311, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7311, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7311, 'data-value': derived.doubled }, children);
}
export default Component7311;
