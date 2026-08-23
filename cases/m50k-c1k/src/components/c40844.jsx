import React from 'react';
const LABEL_40844 = 'component_40844';
export function Component40844({ value = 40844, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40844, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40844, 'data-value': derived.doubled }, children);
}
export default Component40844;
