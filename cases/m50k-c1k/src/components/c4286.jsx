import React from 'react';
const LABEL_4286 = 'component_4286';
export function Component4286({ value = 4286, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4286, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4286, 'data-value': derived.doubled }, children);
}
export default Component4286;
