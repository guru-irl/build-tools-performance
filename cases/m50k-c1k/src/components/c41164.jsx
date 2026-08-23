import React from 'react';
const LABEL_41164 = 'component_41164';
export function Component41164({ value = 41164, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41164, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41164, 'data-value': derived.doubled }, children);
}
export default Component41164;
