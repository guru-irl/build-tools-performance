import React from 'react';
const LABEL_34908 = 'component_34908';
export function Component34908({ value = 34908, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34908, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34908, 'data-value': derived.doubled }, children);
}
export default Component34908;
