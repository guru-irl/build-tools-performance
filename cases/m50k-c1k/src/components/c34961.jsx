import React from 'react';
const LABEL_34961 = 'component_34961';
export function Component34961({ value = 34961, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34961, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34961, 'data-value': derived.doubled }, children);
}
export default Component34961;
