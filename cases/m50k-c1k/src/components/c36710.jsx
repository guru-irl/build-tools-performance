import React from 'react';
const LABEL_36710 = 'component_36710';
export function Component36710({ value = 36710, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36710, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36710, 'data-value': derived.doubled }, children);
}
export default Component36710;
