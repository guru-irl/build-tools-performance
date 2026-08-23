import React from 'react';
const LABEL_16166 = 'component_16166';
export function Component16166({ value = 16166, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16166, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16166, 'data-value': derived.doubled }, children);
}
export default Component16166;
