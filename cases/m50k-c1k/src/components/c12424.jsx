import React from 'react';
const LABEL_12424 = 'component_12424';
export function Component12424({ value = 12424, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12424, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12424, 'data-value': derived.doubled }, children);
}
export default Component12424;
