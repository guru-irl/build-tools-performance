import React from 'react';
const LABEL_31716 = 'component_31716';
export function Component31716({ value = 31716, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31716, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31716, 'data-value': derived.doubled }, children);
}
export default Component31716;
