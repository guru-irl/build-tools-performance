import React from 'react';
const LABEL_26929 = 'component_26929';
export function Component26929({ value = 26929, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26929, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26929, 'data-value': derived.doubled }, children);
}
export default Component26929;
