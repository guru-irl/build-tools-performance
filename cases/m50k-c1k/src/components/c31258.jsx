import React from 'react';
const LABEL_31258 = 'component_31258';
export function Component31258({ value = 31258, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31258, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31258, 'data-value': derived.doubled }, children);
}
export default Component31258;
