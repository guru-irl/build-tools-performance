import React from 'react';
const LABEL_41311 = 'component_41311';
export function Component41311({ value = 41311, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41311, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41311, 'data-value': derived.doubled }, children);
}
export default Component41311;
