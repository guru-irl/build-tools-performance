import React from 'react';
const LABEL_26514 = 'component_26514';
export function Component26514({ value = 26514, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26514, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26514, 'data-value': derived.doubled }, children);
}
export default Component26514;
