import React from 'react';
const LABEL_19625 = 'component_19625';
export function Component19625({ value = 19625, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19625, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19625, 'data-value': derived.doubled }, children);
}
export default Component19625;
