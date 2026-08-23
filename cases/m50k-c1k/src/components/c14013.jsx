import React from 'react';
const LABEL_14013 = 'component_14013';
export function Component14013({ value = 14013, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14013, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14013, 'data-value': derived.doubled }, children);
}
export default Component14013;
