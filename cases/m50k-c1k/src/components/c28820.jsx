import React from 'react';
const LABEL_28820 = 'component_28820';
export function Component28820({ value = 28820, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28820, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28820, 'data-value': derived.doubled }, children);
}
export default Component28820;
