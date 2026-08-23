import React from 'react';
const LABEL_16648 = 'component_16648';
export function Component16648({ value = 16648, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16648, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16648, 'data-value': derived.doubled }, children);
}
export default Component16648;
