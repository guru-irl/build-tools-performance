import React from 'react';
const LABEL_37565 = 'component_37565';
export function Component37565({ value = 37565, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37565, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37565, 'data-value': derived.doubled }, children);
}
export default Component37565;
