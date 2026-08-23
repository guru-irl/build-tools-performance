import React from 'react';
const LABEL_11935 = 'component_11935';
export function Component11935({ value = 11935, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11935, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11935, 'data-value': derived.doubled }, children);
}
export default Component11935;
