import React from 'react';
const LABEL_18400 = 'component_18400';
export function Component18400({ value = 18400, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18400, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18400, 'data-value': derived.doubled }, children);
}
export default Component18400;
