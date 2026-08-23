import React from 'react';
const LABEL_26761 = 'component_26761';
export function Component26761({ value = 26761, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26761, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26761, 'data-value': derived.doubled }, children);
}
export default Component26761;
