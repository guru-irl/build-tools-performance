import React from 'react';
const LABEL_10760 = 'component_10760';
export function Component10760({ value = 10760, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10760, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10760, 'data-value': derived.doubled }, children);
}
export default Component10760;
