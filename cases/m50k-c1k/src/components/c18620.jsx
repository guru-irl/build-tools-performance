import React from 'react';
const LABEL_18620 = 'component_18620';
export function Component18620({ value = 18620, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18620, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18620, 'data-value': derived.doubled }, children);
}
export default Component18620;
