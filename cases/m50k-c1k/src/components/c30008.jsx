import React from 'react';
const LABEL_30008 = 'component_30008';
export function Component30008({ value = 30008, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30008, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30008, 'data-value': derived.doubled }, children);
}
export default Component30008;
