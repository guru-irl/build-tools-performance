import React from 'react';
const LABEL_28666 = 'component_28666';
export function Component28666({ value = 28666, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28666, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28666, 'data-value': derived.doubled }, children);
}
export default Component28666;
