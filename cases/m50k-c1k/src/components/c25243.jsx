import React from 'react';
const LABEL_25243 = 'component_25243';
export function Component25243({ value = 25243, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25243, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25243, 'data-value': derived.doubled }, children);
}
export default Component25243;
