import React from 'react';
const LABEL_14087 = 'component_14087';
export function Component14087({ value = 14087, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14087, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14087, 'data-value': derived.doubled }, children);
}
export default Component14087;
