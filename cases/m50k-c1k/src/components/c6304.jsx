import React from 'react';
const LABEL_6304 = 'component_6304';
export function Component6304({ value = 6304, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6304, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6304, 'data-value': derived.doubled }, children);
}
export default Component6304;
