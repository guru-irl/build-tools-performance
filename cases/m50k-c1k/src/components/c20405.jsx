import React from 'react';
const LABEL_20405 = 'component_20405';
export function Component20405({ value = 20405, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20405, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20405, 'data-value': derived.doubled }, children);
}
export default Component20405;
