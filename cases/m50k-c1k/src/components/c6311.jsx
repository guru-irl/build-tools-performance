import React from 'react';
const LABEL_6311 = 'component_6311';
export function Component6311({ value = 6311, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6311, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6311, 'data-value': derived.doubled }, children);
}
export default Component6311;
