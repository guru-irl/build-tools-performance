import React from 'react';
const LABEL_31741 = 'component_31741';
export function Component31741({ value = 31741, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31741, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31741, 'data-value': derived.doubled }, children);
}
export default Component31741;
