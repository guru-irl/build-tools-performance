import React from 'react';
const LABEL_46166 = 'component_46166';
export function Component46166({ value = 46166, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46166, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46166, 'data-value': derived.doubled }, children);
}
export default Component46166;
