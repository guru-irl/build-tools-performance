import React from 'react';
const LABEL_14793 = 'component_14793';
export function Component14793({ value = 14793, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14793, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14793, 'data-value': derived.doubled }, children);
}
export default Component14793;
