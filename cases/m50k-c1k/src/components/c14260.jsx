import React from 'react';
const LABEL_14260 = 'component_14260';
export function Component14260({ value = 14260, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14260, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14260, 'data-value': derived.doubled }, children);
}
export default Component14260;
