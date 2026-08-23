import React from 'react';
const LABEL_1400 = 'component_1400';
export function Component1400({ value = 1400, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1400, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1400, 'data-value': derived.doubled }, children);
}
export default Component1400;
