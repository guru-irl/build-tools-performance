import React from 'react';
const LABEL_2733 = 'component_2733';
export function Component2733({ value = 2733, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2733, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2733, 'data-value': derived.doubled }, children);
}
export default Component2733;
