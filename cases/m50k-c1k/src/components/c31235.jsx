import React from 'react';
const LABEL_31235 = 'component_31235';
export function Component31235({ value = 31235, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31235, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31235, 'data-value': derived.doubled }, children);
}
export default Component31235;
