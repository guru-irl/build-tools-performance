import React from 'react';
const LABEL_20796 = 'component_20796';
export function Component20796({ value = 20796, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20796, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20796, 'data-value': derived.doubled }, children);
}
export default Component20796;
