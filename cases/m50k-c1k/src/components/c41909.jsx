import React from 'react';
const LABEL_41909 = 'component_41909';
export function Component41909({ value = 41909, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41909, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41909, 'data-value': derived.doubled }, children);
}
export default Component41909;
