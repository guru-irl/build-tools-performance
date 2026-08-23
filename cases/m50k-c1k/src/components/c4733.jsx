import React from 'react';
const LABEL_4733 = 'component_4733';
export function Component4733({ value = 4733, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4733, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4733, 'data-value': derived.doubled }, children);
}
export default Component4733;
