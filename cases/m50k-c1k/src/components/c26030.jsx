import React from 'react';
const LABEL_26030 = 'component_26030';
export function Component26030({ value = 26030, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26030, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26030, 'data-value': derived.doubled }, children);
}
export default Component26030;
