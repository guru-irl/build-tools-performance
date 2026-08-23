import React from 'react';
const LABEL_11087 = 'component_11087';
export function Component11087({ value = 11087, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11087, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11087, 'data-value': derived.doubled }, children);
}
export default Component11087;
