import React from 'react';
const LABEL_18603 = 'component_18603';
export function Component18603({ value = 18603, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18603, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18603, 'data-value': derived.doubled }, children);
}
export default Component18603;
