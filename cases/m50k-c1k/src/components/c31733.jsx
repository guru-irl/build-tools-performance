import React from 'react';
const LABEL_31733 = 'component_31733';
export function Component31733({ value = 31733, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31733, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31733, 'data-value': derived.doubled }, children);
}
export default Component31733;
