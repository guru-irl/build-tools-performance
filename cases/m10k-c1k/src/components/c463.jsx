import React from 'react';
const LABEL_463 = 'component_463';
export function Component463({ value = 463, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_463, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_463, 'data-value': derived.doubled }, children);
}
export default Component463;
