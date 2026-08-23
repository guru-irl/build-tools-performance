import React from 'react';
const LABEL_28386 = 'component_28386';
export function Component28386({ value = 28386, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28386, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28386, 'data-value': derived.doubled }, children);
}
export default Component28386;
