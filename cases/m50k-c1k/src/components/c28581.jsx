import React from 'react';
const LABEL_28581 = 'component_28581';
export function Component28581({ value = 28581, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28581, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28581, 'data-value': derived.doubled }, children);
}
export default Component28581;
