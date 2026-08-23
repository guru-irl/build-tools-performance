import React from 'react';
const LABEL_40188 = 'component_40188';
export function Component40188({ value = 40188, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40188, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40188, 'data-value': derived.doubled }, children);
}
export default Component40188;
