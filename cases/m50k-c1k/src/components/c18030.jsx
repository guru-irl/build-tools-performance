import React from 'react';
const LABEL_18030 = 'component_18030';
export function Component18030({ value = 18030, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18030, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18030, 'data-value': derived.doubled }, children);
}
export default Component18030;
