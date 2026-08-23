import React from 'react';
const LABEL_30733 = 'component_30733';
export function Component30733({ value = 30733, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30733, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30733, 'data-value': derived.doubled }, children);
}
export default Component30733;
