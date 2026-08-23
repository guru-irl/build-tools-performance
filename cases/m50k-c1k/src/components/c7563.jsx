import React from 'react';
const LABEL_7563 = 'component_7563';
export function Component7563({ value = 7563, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7563, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7563, 'data-value': derived.doubled }, children);
}
export default Component7563;
