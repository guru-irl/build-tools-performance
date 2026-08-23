import React from 'react';
const LABEL_20584 = 'component_20584';
export function Component20584({ value = 20584, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20584, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20584, 'data-value': derived.doubled }, children);
}
export default Component20584;
