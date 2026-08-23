import React from 'react';
const LABEL_28005 = 'component_28005';
export function Component28005({ value = 28005, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28005, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28005, 'data-value': derived.doubled }, children);
}
export default Component28005;
