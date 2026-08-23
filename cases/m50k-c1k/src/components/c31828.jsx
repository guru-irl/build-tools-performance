import React from 'react';
const LABEL_31828 = 'component_31828';
export function Component31828({ value = 31828, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31828, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31828, 'data-value': derived.doubled }, children);
}
export default Component31828;
