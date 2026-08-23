import React from 'react';
const LABEL_7746 = 'component_7746';
export function Component7746({ value = 7746, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7746, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7746, 'data-value': derived.doubled }, children);
}
export default Component7746;
