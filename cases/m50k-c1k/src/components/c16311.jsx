import React from 'react';
const LABEL_16311 = 'component_16311';
export function Component16311({ value = 16311, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16311, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16311, 'data-value': derived.doubled }, children);
}
export default Component16311;
