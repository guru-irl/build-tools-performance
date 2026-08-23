import React from 'react';
const LABEL_28958 = 'component_28958';
export function Component28958({ value = 28958, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28958, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28958, 'data-value': derived.doubled }, children);
}
export default Component28958;
