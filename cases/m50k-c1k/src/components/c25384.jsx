import React from 'react';
const LABEL_25384 = 'component_25384';
export function Component25384({ value = 25384, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25384, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25384, 'data-value': derived.doubled }, children);
}
export default Component25384;
