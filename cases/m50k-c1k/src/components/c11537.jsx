import React from 'react';
const LABEL_11537 = 'component_11537';
export function Component11537({ value = 11537, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11537, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11537, 'data-value': derived.doubled }, children);
}
export default Component11537;
