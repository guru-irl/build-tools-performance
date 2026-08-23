import React from 'react';
const LABEL_39656 = 'component_39656';
export function Component39656({ value = 39656, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39656, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39656, 'data-value': derived.doubled }, children);
}
export default Component39656;
