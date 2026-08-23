import React from 'react';
const LABEL_16753 = 'component_16753';
export function Component16753({ value = 16753, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16753, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16753, 'data-value': derived.doubled }, children);
}
export default Component16753;
