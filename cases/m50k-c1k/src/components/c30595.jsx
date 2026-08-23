import React from 'react';
const LABEL_30595 = 'component_30595';
export function Component30595({ value = 30595, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30595, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30595, 'data-value': derived.doubled }, children);
}
export default Component30595;
