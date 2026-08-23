import React from 'react';
const LABEL_26357 = 'component_26357';
export function Component26357({ value = 26357, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26357, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26357, 'data-value': derived.doubled }, children);
}
export default Component26357;
