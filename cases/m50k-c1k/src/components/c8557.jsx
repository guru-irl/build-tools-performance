import React from 'react';
const LABEL_8557 = 'component_8557';
export function Component8557({ value = 8557, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8557, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8557, 'data-value': derived.doubled }, children);
}
export default Component8557;
