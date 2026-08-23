import React from 'react';
const LABEL_6444 = 'component_6444';
export function Component6444({ value = 6444, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6444, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6444, 'data-value': derived.doubled }, children);
}
export default Component6444;
