import React from 'react';
const LABEL_11275 = 'component_11275';
export function Component11275({ value = 11275, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11275, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11275, 'data-value': derived.doubled }, children);
}
export default Component11275;
