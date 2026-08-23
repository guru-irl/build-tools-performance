import React from 'react';
const LABEL_41527 = 'component_41527';
export function Component41527({ value = 41527, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41527, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41527, 'data-value': derived.doubled }, children);
}
export default Component41527;
