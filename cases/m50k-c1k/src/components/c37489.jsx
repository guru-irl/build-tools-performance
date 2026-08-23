import React from 'react';
const LABEL_37489 = 'component_37489';
export function Component37489({ value = 37489, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37489, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37489, 'data-value': derived.doubled }, children);
}
export default Component37489;
