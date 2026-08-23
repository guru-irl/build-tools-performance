import React from 'react';
const LABEL_18183 = 'component_18183';
export function Component18183({ value = 18183, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18183, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18183, 'data-value': derived.doubled }, children);
}
export default Component18183;
