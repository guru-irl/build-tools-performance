import React from 'react';
const LABEL_14860 = 'component_14860';
export function Component14860({ value = 14860, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14860, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14860, 'data-value': derived.doubled }, children);
}
export default Component14860;
