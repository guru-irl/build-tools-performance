import React from 'react';
const LABEL_44537 = 'component_44537';
export function Component44537({ value = 44537, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44537, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44537, 'data-value': derived.doubled }, children);
}
export default Component44537;
