import React from 'react';
const LABEL_11166 = 'component_11166';
export function Component11166({ value = 11166, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11166, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11166, 'data-value': derived.doubled }, children);
}
export default Component11166;
