import React from 'react';
const LABEL_41048 = 'component_41048';
export function Component41048({ value = 41048, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41048, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41048, 'data-value': derived.doubled }, children);
}
export default Component41048;
