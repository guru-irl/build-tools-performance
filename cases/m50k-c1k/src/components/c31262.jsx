import React from 'react';
const LABEL_31262 = 'component_31262';
export function Component31262({ value = 31262, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31262, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31262, 'data-value': derived.doubled }, children);
}
export default Component31262;
