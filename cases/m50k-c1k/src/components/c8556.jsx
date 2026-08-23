import React from 'react';
const LABEL_8556 = 'component_8556';
export function Component8556({ value = 8556, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8556, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8556, 'data-value': derived.doubled }, children);
}
export default Component8556;
