import React from 'react';
const LABEL_28717 = 'component_28717';
export function Component28717({ value = 28717, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28717, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28717, 'data-value': derived.doubled }, children);
}
export default Component28717;
