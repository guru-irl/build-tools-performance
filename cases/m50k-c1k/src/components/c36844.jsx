import React from 'react';
const LABEL_36844 = 'component_36844';
export function Component36844({ value = 36844, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36844, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36844, 'data-value': derived.doubled }, children);
}
export default Component36844;
