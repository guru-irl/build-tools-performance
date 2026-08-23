import React from 'react';
const LABEL_8820 = 'component_8820';
export function Component8820({ value = 8820, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8820, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8820, 'data-value': derived.doubled }, children);
}
export default Component8820;
