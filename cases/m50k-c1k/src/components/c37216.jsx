import React from 'react';
const LABEL_37216 = 'component_37216';
export function Component37216({ value = 37216, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37216, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37216, 'data-value': derived.doubled }, children);
}
export default Component37216;
