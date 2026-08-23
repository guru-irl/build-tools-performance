import React from 'react';
const LABEL_46030 = 'component_46030';
export function Component46030({ value = 46030, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46030, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46030, 'data-value': derived.doubled }, children);
}
export default Component46030;
