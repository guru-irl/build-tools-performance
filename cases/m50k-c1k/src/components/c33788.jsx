import React from 'react';
const LABEL_33788 = 'component_33788';
export function Component33788({ value = 33788, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33788, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33788, 'data-value': derived.doubled }, children);
}
export default Component33788;
