import React from 'react';
const LABEL_20781 = 'component_20781';
export function Component20781({ value = 20781, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20781, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20781, 'data-value': derived.doubled }, children);
}
export default Component20781;
