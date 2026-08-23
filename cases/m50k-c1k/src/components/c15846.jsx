import React from 'react';
const LABEL_15846 = 'component_15846';
export function Component15846({ value = 15846, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15846, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15846, 'data-value': derived.doubled }, children);
}
export default Component15846;
