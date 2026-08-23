import React from 'react';
const LABEL_11357 = 'component_11357';
export function Component11357({ value = 11357, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11357, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11357, 'data-value': derived.doubled }, children);
}
export default Component11357;
