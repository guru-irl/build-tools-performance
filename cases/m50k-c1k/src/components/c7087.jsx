import React from 'react';
const LABEL_7087 = 'component_7087';
export function Component7087({ value = 7087, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7087, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7087, 'data-value': derived.doubled }, children);
}
export default Component7087;
