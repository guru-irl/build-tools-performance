import React from 'react';
const LABEL_4812 = 'component_4812';
export function Component4812({ value = 4812, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4812, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4812, 'data-value': derived.doubled }, children);
}
export default Component4812;
