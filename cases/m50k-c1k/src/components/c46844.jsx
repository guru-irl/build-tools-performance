import React from 'react';
const LABEL_46844 = 'component_46844';
export function Component46844({ value = 46844, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46844, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46844, 'data-value': derived.doubled }, children);
}
export default Component46844;
