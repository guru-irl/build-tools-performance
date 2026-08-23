import React from 'react';
const LABEL_28713 = 'component_28713';
export function Component28713({ value = 28713, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28713, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28713, 'data-value': derived.doubled }, children);
}
export default Component28713;
