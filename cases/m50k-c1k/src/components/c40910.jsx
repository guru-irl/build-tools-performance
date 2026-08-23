import React from 'react';
const LABEL_40910 = 'component_40910';
export function Component40910({ value = 40910, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40910, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40910, 'data-value': derived.doubled }, children);
}
export default Component40910;
