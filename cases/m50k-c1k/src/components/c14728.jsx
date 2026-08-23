import React from 'react';
const LABEL_14728 = 'component_14728';
export function Component14728({ value = 14728, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14728, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14728, 'data-value': derived.doubled }, children);
}
export default Component14728;
