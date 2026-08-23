import React from 'react';
const LABEL_11489 = 'component_11489';
export function Component11489({ value = 11489, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11489, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11489, 'data-value': derived.doubled }, children);
}
export default Component11489;
