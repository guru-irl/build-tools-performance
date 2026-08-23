import React from 'react';
const LABEL_28699 = 'component_28699';
export function Component28699({ value = 28699, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28699, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28699, 'data-value': derived.doubled }, children);
}
export default Component28699;
