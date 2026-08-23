import React from 'react';
const LABEL_26021 = 'component_26021';
export function Component26021({ value = 26021, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26021, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26021, 'data-value': derived.doubled }, children);
}
export default Component26021;
