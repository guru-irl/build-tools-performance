import React from 'react';
const LABEL_36991 = 'component_36991';
export function Component36991({ value = 36991, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36991, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36991, 'data-value': derived.doubled }, children);
}
export default Component36991;
