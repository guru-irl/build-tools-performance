import React from 'react';
const LABEL_31948 = 'component_31948';
export function Component31948({ value = 31948, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31948, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31948, 'data-value': derived.doubled }, children);
}
export default Component31948;
