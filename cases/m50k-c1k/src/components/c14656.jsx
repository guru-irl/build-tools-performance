import React from 'react';
const LABEL_14656 = 'component_14656';
export function Component14656({ value = 14656, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14656, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14656, 'data-value': derived.doubled }, children);
}
export default Component14656;
