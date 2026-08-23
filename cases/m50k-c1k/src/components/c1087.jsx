import React from 'react';
const LABEL_1087 = 'component_1087';
export function Component1087({ value = 1087, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1087, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1087, 'data-value': derived.doubled }, children);
}
export default Component1087;
