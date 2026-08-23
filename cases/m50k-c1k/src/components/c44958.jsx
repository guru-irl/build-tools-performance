import React from 'react';
const LABEL_44958 = 'component_44958';
export function Component44958({ value = 44958, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44958, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44958, 'data-value': derived.doubled }, children);
}
export default Component44958;
