import React from 'react';
const LABEL_31169 = 'component_31169';
export function Component31169({ value = 31169, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31169, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31169, 'data-value': derived.doubled }, children);
}
export default Component31169;
