import React from 'react';
const LABEL_19626 = 'component_19626';
export function Component19626({ value = 19626, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19626, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19626, 'data-value': derived.doubled }, children);
}
export default Component19626;
