import React from 'react';
const LABEL_14290 = 'component_14290';
export function Component14290({ value = 14290, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14290, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14290, 'data-value': derived.doubled }, children);
}
export default Component14290;
