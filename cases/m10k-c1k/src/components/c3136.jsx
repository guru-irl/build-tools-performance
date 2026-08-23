import React from 'react';
const LABEL_3136 = 'component_3136';
export function Component3136({ value = 3136, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3136, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3136, 'data-value': derived.doubled }, children);
}
export default Component3136;
