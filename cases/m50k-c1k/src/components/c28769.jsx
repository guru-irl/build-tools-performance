import React from 'react';
const LABEL_28769 = 'component_28769';
export function Component28769({ value = 28769, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28769, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28769, 'data-value': derived.doubled }, children);
}
export default Component28769;
