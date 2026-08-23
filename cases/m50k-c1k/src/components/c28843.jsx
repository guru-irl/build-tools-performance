import React from 'react';
const LABEL_28843 = 'component_28843';
export function Component28843({ value = 28843, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28843, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28843, 'data-value': derived.doubled }, children);
}
export default Component28843;
