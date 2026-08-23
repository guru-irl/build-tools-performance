import React from 'react';
const LABEL_28021 = 'component_28021';
export function Component28021({ value = 28021, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28021, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28021, 'data-value': derived.doubled }, children);
}
export default Component28021;
