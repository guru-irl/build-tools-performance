import React from 'react';
const LABEL_16948 = 'component_16948';
export function Component16948({ value = 16948, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16948, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16948, 'data-value': derived.doubled }, children);
}
export default Component16948;
