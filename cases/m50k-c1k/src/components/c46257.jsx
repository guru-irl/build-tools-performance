import React from 'react';
const LABEL_46257 = 'component_46257';
export function Component46257({ value = 46257, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46257, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46257, 'data-value': derived.doubled }, children);
}
export default Component46257;
