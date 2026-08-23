import React from 'react';
const LABEL_16908 = 'component_16908';
export function Component16908({ value = 16908, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16908, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16908, 'data-value': derived.doubled }, children);
}
export default Component16908;
