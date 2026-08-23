import React from 'react';
const LABEL_40879 = 'component_40879';
export function Component40879({ value = 40879, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40879, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40879, 'data-value': derived.doubled }, children);
}
export default Component40879;
