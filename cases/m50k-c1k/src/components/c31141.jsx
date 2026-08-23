import React from 'react';
const LABEL_31141 = 'component_31141';
export function Component31141({ value = 31141, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31141, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31141, 'data-value': derived.doubled }, children);
}
export default Component31141;
