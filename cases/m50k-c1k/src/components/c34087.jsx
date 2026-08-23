import React from 'react';
const LABEL_34087 = 'component_34087';
export function Component34087({ value = 34087, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34087, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34087, 'data-value': derived.doubled }, children);
}
export default Component34087;
