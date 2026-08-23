import React from 'react';
const LABEL_7006 = 'component_7006';
export function Component7006({ value = 7006, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7006, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7006, 'data-value': derived.doubled }, children);
}
export default Component7006;
