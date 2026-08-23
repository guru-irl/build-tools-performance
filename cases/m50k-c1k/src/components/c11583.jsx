import React from 'react';
const LABEL_11583 = 'component_11583';
export function Component11583({ value = 11583, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11583, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11583, 'data-value': derived.doubled }, children);
}
export default Component11583;
