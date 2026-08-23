import React from 'react';
const LABEL_31231 = 'component_31231';
export function Component31231({ value = 31231, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31231, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31231, 'data-value': derived.doubled }, children);
}
export default Component31231;
