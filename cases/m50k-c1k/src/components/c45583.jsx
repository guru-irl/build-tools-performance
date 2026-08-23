import React from 'react';
const LABEL_45583 = 'component_45583';
export function Component45583({ value = 45583, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45583, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45583, 'data-value': derived.doubled }, children);
}
export default Component45583;
