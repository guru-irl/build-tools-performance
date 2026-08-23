import React from 'react';
const LABEL_31820 = 'component_31820';
export function Component31820({ value = 31820, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31820, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31820, 'data-value': derived.doubled }, children);
}
export default Component31820;
