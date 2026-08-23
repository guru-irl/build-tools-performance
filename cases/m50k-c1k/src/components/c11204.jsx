import React from 'react';
const LABEL_11204 = 'component_11204';
export function Component11204({ value = 11204, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11204, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11204, 'data-value': derived.doubled }, children);
}
export default Component11204;
