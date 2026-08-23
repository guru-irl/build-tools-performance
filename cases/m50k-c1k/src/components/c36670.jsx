import React from 'react';
const LABEL_36670 = 'component_36670';
export function Component36670({ value = 36670, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36670, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36670, 'data-value': derived.doubled }, children);
}
export default Component36670;
