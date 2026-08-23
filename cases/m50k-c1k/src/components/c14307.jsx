import React from 'react';
const LABEL_14307 = 'component_14307';
export function Component14307({ value = 14307, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14307, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14307, 'data-value': derived.doubled }, children);
}
export default Component14307;
