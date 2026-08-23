import React from 'react';
const LABEL_23844 = 'component_23844';
export function Component23844({ value = 23844, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23844, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23844, 'data-value': derived.doubled }, children);
}
export default Component23844;
