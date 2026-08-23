import React from 'react';
const LABEL_31013 = 'component_31013';
export function Component31013({ value = 31013, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31013, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31013, 'data-value': derived.doubled }, children);
}
export default Component31013;
