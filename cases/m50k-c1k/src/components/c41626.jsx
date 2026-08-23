import React from 'react';
const LABEL_41626 = 'component_41626';
export function Component41626({ value = 41626, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41626, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41626, 'data-value': derived.doubled }, children);
}
export default Component41626;
