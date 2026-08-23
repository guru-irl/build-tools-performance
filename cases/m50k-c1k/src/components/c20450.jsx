import React from 'react';
const LABEL_20450 = 'component_20450';
export function Component20450({ value = 20450, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20450, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20450, 'data-value': derived.doubled }, children);
}
export default Component20450;
