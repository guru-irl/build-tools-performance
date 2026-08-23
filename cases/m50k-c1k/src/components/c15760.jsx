import React from 'react';
const LABEL_15760 = 'component_15760';
export function Component15760({ value = 15760, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15760, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15760, 'data-value': derived.doubled }, children);
}
export default Component15760;
