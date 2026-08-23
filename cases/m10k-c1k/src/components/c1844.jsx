import React from 'react';
const LABEL_1844 = 'component_1844';
export function Component1844({ value = 1844, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1844, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1844, 'data-value': derived.doubled }, children);
}
export default Component1844;
