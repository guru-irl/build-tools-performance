import React from 'react';
const LABEL_11591 = 'component_11591';
export function Component11591({ value = 11591, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11591, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11591, 'data-value': derived.doubled }, children);
}
export default Component11591;
