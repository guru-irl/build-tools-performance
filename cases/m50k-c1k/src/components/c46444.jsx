import React from 'react';
const LABEL_46444 = 'component_46444';
export function Component46444({ value = 46444, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46444, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46444, 'data-value': derived.doubled }, children);
}
export default Component46444;
