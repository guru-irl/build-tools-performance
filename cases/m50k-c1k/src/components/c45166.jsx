import React from 'react';
const LABEL_45166 = 'component_45166';
export function Component45166({ value = 45166, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45166, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45166, 'data-value': derived.doubled }, children);
}
export default Component45166;
