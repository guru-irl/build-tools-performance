import React from 'react';
const LABEL_18872 = 'component_18872';
export function Component18872({ value = 18872, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18872, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18872, 'data-value': derived.doubled }, children);
}
export default Component18872;
