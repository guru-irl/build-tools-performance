import React from 'react';
const LABEL_26568 = 'component_26568';
export function Component26568({ value = 26568, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26568, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26568, 'data-value': derived.doubled }, children);
}
export default Component26568;
