import React from 'react';
const LABEL_42087 = 'component_42087';
export function Component42087({ value = 42087, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42087, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42087, 'data-value': derived.doubled }, children);
}
export default Component42087;
