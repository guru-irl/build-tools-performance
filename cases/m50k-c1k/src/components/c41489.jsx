import React from 'react';
const LABEL_41489 = 'component_41489';
export function Component41489({ value = 41489, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41489, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41489, 'data-value': derived.doubled }, children);
}
export default Component41489;
