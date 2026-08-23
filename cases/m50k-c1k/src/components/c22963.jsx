import React from 'react';
const LABEL_22963 = 'component_22963';
export function Component22963({ value = 22963, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22963, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22963, 'data-value': derived.doubled }, children);
}
export default Component22963;
