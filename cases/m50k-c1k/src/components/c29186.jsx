import React from 'react';
const LABEL_29186 = 'component_29186';
export function Component29186({ value = 29186, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29186, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29186, 'data-value': derived.doubled }, children);
}
export default Component29186;
