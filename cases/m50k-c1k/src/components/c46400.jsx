import React from 'react';
const LABEL_46400 = 'component_46400';
export function Component46400({ value = 46400, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46400, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46400, 'data-value': derived.doubled }, children);
}
export default Component46400;
