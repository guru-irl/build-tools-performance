import React from 'react';
const LABEL_41595 = 'component_41595';
export function Component41595({ value = 41595, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41595, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41595, 'data-value': derived.doubled }, children);
}
export default Component41595;
