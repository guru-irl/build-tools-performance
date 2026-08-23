import React from 'react';
const LABEL_46017 = 'component_46017';
export function Component46017({ value = 46017, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46017, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46017, 'data-value': derived.doubled }, children);
}
export default Component46017;
