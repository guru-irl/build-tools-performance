import React from 'react';
const LABEL_14295 = 'component_14295';
export function Component14295({ value = 14295, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14295, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14295, 'data-value': derived.doubled }, children);
}
export default Component14295;
