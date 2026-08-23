import React from 'react';
const LABEL_18417 = 'component_18417';
export function Component18417({ value = 18417, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18417, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18417, 'data-value': derived.doubled }, children);
}
export default Component18417;
