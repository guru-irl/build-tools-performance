import React from 'react';
const LABEL_31275 = 'component_31275';
export function Component31275({ value = 31275, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31275, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31275, 'data-value': derived.doubled }, children);
}
export default Component31275;
