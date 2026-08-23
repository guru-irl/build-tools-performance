import React from 'react';
const LABEL_34217 = 'component_34217';
export function Component34217({ value = 34217, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34217, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34217, 'data-value': derived.doubled }, children);
}
export default Component34217;
