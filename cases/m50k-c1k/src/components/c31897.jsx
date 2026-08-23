import React from 'react';
const LABEL_31897 = 'component_31897';
export function Component31897({ value = 31897, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31897, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31897, 'data-value': derived.doubled }, children);
}
export default Component31897;
