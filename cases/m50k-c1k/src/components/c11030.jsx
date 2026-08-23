import React from 'react';
const LABEL_11030 = 'component_11030';
export function Component11030({ value = 11030, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11030, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11030, 'data-value': derived.doubled }, children);
}
export default Component11030;
