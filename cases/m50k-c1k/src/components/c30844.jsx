import React from 'react';
const LABEL_30844 = 'component_30844';
export function Component30844({ value = 30844, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30844, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30844, 'data-value': derived.doubled }, children);
}
export default Component30844;
