import React from 'react';
const LABEL_37232 = 'component_37232';
export function Component37232({ value = 37232, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37232, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37232, 'data-value': derived.doubled }, children);
}
export default Component37232;
