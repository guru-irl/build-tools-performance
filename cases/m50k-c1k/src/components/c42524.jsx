import React from 'react';
const LABEL_42524 = 'component_42524';
export function Component42524({ value = 42524, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42524, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42524, 'data-value': derived.doubled }, children);
}
export default Component42524;
