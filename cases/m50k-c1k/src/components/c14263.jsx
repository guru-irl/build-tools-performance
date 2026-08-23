import React from 'react';
const LABEL_14263 = 'component_14263';
export function Component14263({ value = 14263, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14263, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14263, 'data-value': derived.doubled }, children);
}
export default Component14263;
