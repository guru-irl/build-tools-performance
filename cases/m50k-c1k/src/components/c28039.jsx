import React from 'react';
const LABEL_28039 = 'component_28039';
export function Component28039({ value = 28039, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28039, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28039, 'data-value': derived.doubled }, children);
}
export default Component28039;
