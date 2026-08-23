import React from 'react';
const LABEL_6417 = 'component_6417';
export function Component6417({ value = 6417, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6417, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6417, 'data-value': derived.doubled }, children);
}
export default Component6417;
