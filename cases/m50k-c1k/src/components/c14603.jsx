import React from 'react';
const LABEL_14603 = 'component_14603';
export function Component14603({ value = 14603, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14603, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14603, 'data-value': derived.doubled }, children);
}
export default Component14603;
