import React from 'react';
const LABEL_22087 = 'component_22087';
export function Component22087({ value = 22087, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22087, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22087, 'data-value': derived.doubled }, children);
}
export default Component22087;
