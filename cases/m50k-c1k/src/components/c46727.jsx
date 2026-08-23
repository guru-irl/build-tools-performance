import React from 'react';
const LABEL_46727 = 'component_46727';
export function Component46727({ value = 46727, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46727, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46727, 'data-value': derived.doubled }, children);
}
export default Component46727;
