import React from 'react';
const LABEL_258 = 'component_258';
export function Component258({ value = 258, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_258, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_258, 'data-value': derived.doubled }, children);
}
export default Component258;
