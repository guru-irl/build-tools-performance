import React from 'react';
const LABEL_16417 = 'component_16417';
export function Component16417({ value = 16417, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16417, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16417, 'data-value': derived.doubled }, children);
}
export default Component16417;
