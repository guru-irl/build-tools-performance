import React from 'react';
const LABEL_39844 = 'component_39844';
export function Component39844({ value = 39844, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39844, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39844, 'data-value': derived.doubled }, children);
}
export default Component39844;
