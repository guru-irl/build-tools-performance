import React from 'react';
const LABEL_42797 = 'component_42797';
export function Component42797({ value = 42797, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42797, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42797, 'data-value': derived.doubled }, children);
}
export default Component42797;
