import React from 'react';
const LABEL_7733 = 'component_7733';
export function Component7733({ value = 7733, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7733, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7733, 'data-value': derived.doubled }, children);
}
export default Component7733;
