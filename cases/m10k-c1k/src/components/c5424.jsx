import React from 'react';
const LABEL_5424 = 'component_5424';
export function Component5424({ value = 5424, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5424, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5424, 'data-value': derived.doubled }, children);
}
export default Component5424;
