import React from 'react';
const LABEL_20400 = 'component_20400';
export function Component20400({ value = 20400, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20400, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20400, 'data-value': derived.doubled }, children);
}
export default Component20400;
