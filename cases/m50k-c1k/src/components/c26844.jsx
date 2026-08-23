import React from 'react';
const LABEL_26844 = 'component_26844';
export function Component26844({ value = 26844, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26844, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26844, 'data-value': derived.doubled }, children);
}
export default Component26844;
