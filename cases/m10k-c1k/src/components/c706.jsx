import React from 'react';
const LABEL_706 = 'component_706';
export function Component706({ value = 706, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_706, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_706, 'data-value': derived.doubled }, children);
}
export default Component706;
