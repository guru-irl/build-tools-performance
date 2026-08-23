import React from 'react';
const LABEL_34595 = 'component_34595';
export function Component34595({ value = 34595, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34595, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34595, 'data-value': derived.doubled }, children);
}
export default Component34595;
