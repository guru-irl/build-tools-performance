import React from 'react';
const LABEL_18844 = 'component_18844';
export function Component18844({ value = 18844, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18844, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18844, 'data-value': derived.doubled }, children);
}
export default Component18844;
