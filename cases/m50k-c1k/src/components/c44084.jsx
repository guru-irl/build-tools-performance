import React from 'react';
const LABEL_44084 = 'component_44084';
export function Component44084({ value = 44084, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44084, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44084, 'data-value': derived.doubled }, children);
}
export default Component44084;
