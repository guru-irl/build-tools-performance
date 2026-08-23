import React from 'react';
const LABEL_15566 = 'component_15566';
export function Component15566({ value = 15566, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15566, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15566, 'data-value': derived.doubled }, children);
}
export default Component15566;
