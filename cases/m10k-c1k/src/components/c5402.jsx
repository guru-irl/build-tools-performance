import React from 'react';
const LABEL_5402 = 'component_5402';
export function Component5402({ value = 5402, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5402, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5402, 'data-value': derived.doubled }, children);
}
export default Component5402;
