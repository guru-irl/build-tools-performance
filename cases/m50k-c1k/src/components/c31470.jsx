import React from 'react';
const LABEL_31470 = 'component_31470';
export function Component31470({ value = 31470, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31470, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31470, 'data-value': derived.doubled }, children);
}
export default Component31470;
