import React from 'react';
const LABEL_23651 = 'component_23651';
export function Component23651({ value = 23651, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23651, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23651, 'data-value': derived.doubled }, children);
}
export default Component23651;
