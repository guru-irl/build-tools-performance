import React from 'react';
const LABEL_22898 = 'component_22898';
export function Component22898({ value = 22898, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22898, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22898, 'data-value': derived.doubled }, children);
}
export default Component22898;
