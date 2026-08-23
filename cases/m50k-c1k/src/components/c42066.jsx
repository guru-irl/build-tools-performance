import React from 'react';
const LABEL_42066 = 'component_42066';
export function Component42066({ value = 42066, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42066, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42066, 'data-value': derived.doubled }, children);
}
export default Component42066;
