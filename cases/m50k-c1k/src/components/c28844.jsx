import React from 'react';
const LABEL_28844 = 'component_28844';
export function Component28844({ value = 28844, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28844, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28844, 'data-value': derived.doubled }, children);
}
export default Component28844;
