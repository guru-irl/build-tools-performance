import React from 'react';
const LABEL_18250 = 'component_18250';
export function Component18250({ value = 18250, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18250, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18250, 'data-value': derived.doubled }, children);
}
export default Component18250;
