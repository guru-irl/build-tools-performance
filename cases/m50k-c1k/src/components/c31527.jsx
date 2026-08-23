import React from 'react';
const LABEL_31527 = 'component_31527';
export function Component31527({ value = 31527, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31527, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31527, 'data-value': derived.doubled }, children);
}
export default Component31527;
