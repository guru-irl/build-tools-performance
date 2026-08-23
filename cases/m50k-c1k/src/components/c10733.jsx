import React from 'react';
const LABEL_10733 = 'component_10733';
export function Component10733({ value = 10733, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10733, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10733, 'data-value': derived.doubled }, children);
}
export default Component10733;
