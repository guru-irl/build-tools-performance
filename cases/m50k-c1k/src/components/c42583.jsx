import React from 'react';
const LABEL_42583 = 'component_42583';
export function Component42583({ value = 42583, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42583, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42583, 'data-value': derived.doubled }, children);
}
export default Component42583;
