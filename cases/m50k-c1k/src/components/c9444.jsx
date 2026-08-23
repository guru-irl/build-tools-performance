import React from 'react';
const LABEL_9444 = 'component_9444';
export function Component9444({ value = 9444, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9444, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9444, 'data-value': derived.doubled }, children);
}
export default Component9444;
