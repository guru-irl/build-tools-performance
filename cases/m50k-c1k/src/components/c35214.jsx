import React from 'react';
const LABEL_35214 = 'component_35214';
export function Component35214({ value = 35214, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35214, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35214, 'data-value': derived.doubled }, children);
}
export default Component35214;
