import React from 'react';
const LABEL_7581 = 'component_7581';
export function Component7581({ value = 7581, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7581, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7581, 'data-value': derived.doubled }, children);
}
export default Component7581;
