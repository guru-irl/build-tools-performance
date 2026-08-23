import React from 'react';
const LABEL_3119 = 'component_3119';
export function Component3119({ value = 3119, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3119, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3119, 'data-value': derived.doubled }, children);
}
export default Component3119;
