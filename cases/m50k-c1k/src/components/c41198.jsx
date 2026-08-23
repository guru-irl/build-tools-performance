import React from 'react';
const LABEL_41198 = 'component_41198';
export function Component41198({ value = 41198, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41198, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41198, 'data-value': derived.doubled }, children);
}
export default Component41198;
