import React from 'react';
const LABEL_42181 = 'component_42181';
export function Component42181({ value = 42181, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42181, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42181, 'data-value': derived.doubled }, children);
}
export default Component42181;
