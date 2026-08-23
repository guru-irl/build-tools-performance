import React from 'react';
const LABEL_11353 = 'component_11353';
export function Component11353({ value = 11353, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11353, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11353, 'data-value': derived.doubled }, children);
}
export default Component11353;
