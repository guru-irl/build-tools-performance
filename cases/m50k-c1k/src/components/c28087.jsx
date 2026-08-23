import React from 'react';
const LABEL_28087 = 'component_28087';
export function Component28087({ value = 28087, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28087, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28087, 'data-value': derived.doubled }, children);
}
export default Component28087;
