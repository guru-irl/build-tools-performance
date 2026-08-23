import React from 'react';
const LABEL_18898 = 'component_18898';
export function Component18898({ value = 18898, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18898, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18898, 'data-value': derived.doubled }, children);
}
export default Component18898;
