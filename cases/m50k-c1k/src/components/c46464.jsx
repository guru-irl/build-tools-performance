import React from 'react';
const LABEL_46464 = 'component_46464';
export function Component46464({ value = 46464, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46464, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46464, 'data-value': derived.doubled }, children);
}
export default Component46464;
