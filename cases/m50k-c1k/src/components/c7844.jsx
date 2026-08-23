import React from 'react';
const LABEL_7844 = 'component_7844';
export function Component7844({ value = 7844, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7844, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7844, 'data-value': derived.doubled }, children);
}
export default Component7844;
