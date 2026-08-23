import React from 'react';
const LABEL_2166 = 'component_2166';
export function Component2166({ value = 2166, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2166, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2166, 'data-value': derived.doubled }, children);
}
export default Component2166;
