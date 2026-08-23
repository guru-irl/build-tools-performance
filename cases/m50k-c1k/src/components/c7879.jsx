import React from 'react';
const LABEL_7879 = 'component_7879';
export function Component7879({ value = 7879, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7879, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7879, 'data-value': derived.doubled }, children);
}
export default Component7879;
