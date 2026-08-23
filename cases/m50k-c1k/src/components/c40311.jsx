import React from 'react';
const LABEL_40311 = 'component_40311';
export function Component40311({ value = 40311, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40311, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40311, 'data-value': derived.doubled }, children);
}
export default Component40311;
