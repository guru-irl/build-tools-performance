import React from 'react';
const LABEL_36460 = 'component_36460';
export function Component36460({ value = 36460, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36460, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36460, 'data-value': derived.doubled }, children);
}
export default Component36460;
