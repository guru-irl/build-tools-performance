import React from 'react';
const LABEL_14033 = 'component_14033';
export function Component14033({ value = 14033, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14033, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14033, 'data-value': derived.doubled }, children);
}
export default Component14033;
