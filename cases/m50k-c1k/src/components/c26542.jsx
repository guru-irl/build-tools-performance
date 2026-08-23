import React from 'react';
const LABEL_26542 = 'component_26542';
export function Component26542({ value = 26542, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26542, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26542, 'data-value': derived.doubled }, children);
}
export default Component26542;
