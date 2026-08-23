import React from 'react';
const LABEL_76 = 'component_76';
export function Component76({ value = 76, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_76, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_76, 'data-value': derived.doubled }, children);
}
export default Component76;
