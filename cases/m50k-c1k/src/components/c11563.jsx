import React from 'react';
const LABEL_11563 = 'component_11563';
export function Component11563({ value = 11563, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11563, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11563, 'data-value': derived.doubled }, children);
}
export default Component11563;
