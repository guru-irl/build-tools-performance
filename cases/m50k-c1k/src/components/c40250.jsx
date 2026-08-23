import React from 'react';
const LABEL_40250 = 'component_40250';
export function Component40250({ value = 40250, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40250, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40250, 'data-value': derived.doubled }, children);
}
export default Component40250;
