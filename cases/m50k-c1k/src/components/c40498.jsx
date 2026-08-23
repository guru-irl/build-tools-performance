import React from 'react';
const LABEL_40498 = 'component_40498';
export function Component40498({ value = 40498, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40498, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40498, 'data-value': derived.doubled }, children);
}
export default Component40498;
