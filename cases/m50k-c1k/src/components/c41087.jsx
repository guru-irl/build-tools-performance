import React from 'react';
const LABEL_41087 = 'component_41087';
export function Component41087({ value = 41087, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41087, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41087, 'data-value': derived.doubled }, children);
}
export default Component41087;
