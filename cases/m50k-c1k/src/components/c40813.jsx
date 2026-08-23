import React from 'react';
const LABEL_40813 = 'component_40813';
export function Component40813({ value = 40813, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40813, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40813, 'data-value': derived.doubled }, children);
}
export default Component40813;
