import React from 'react';
const LABEL_7166 = 'component_7166';
export function Component7166({ value = 7166, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7166, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7166, 'data-value': derived.doubled }, children);
}
export default Component7166;
