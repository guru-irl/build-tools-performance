import React from 'react';
const LABEL_36209 = 'component_36209';
export function Component36209({ value = 36209, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36209, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36209, 'data-value': derived.doubled }, children);
}
export default Component36209;
