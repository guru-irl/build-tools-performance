import React from 'react';
const LABEL_46009 = 'component_46009';
export function Component46009({ value = 46009, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46009, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46009, 'data-value': derived.doubled }, children);
}
export default Component46009;
