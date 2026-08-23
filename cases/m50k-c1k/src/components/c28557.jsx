import React from 'react';
const LABEL_28557 = 'component_28557';
export function Component28557({ value = 28557, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28557, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28557, 'data-value': derived.doubled }, children);
}
export default Component28557;
