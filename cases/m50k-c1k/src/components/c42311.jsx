import React from 'react';
const LABEL_42311 = 'component_42311';
export function Component42311({ value = 42311, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42311, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42311, 'data-value': derived.doubled }, children);
}
export default Component42311;
