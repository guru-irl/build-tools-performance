import React from 'react';
const LABEL_32581 = 'component_32581';
export function Component32581({ value = 32581, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32581, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32581, 'data-value': derived.doubled }, children);
}
export default Component32581;
