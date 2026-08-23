import React from 'react';
const LABEL_11420 = 'component_11420';
export function Component11420({ value = 11420, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11420, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11420, 'data-value': derived.doubled }, children);
}
export default Component11420;
