import React from 'react';
const LABEL_26210 = 'component_26210';
export function Component26210({ value = 26210, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26210, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26210, 'data-value': derived.doubled }, children);
}
export default Component26210;
