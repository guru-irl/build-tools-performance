import React from 'react';
const LABEL_8706 = 'component_8706';
export function Component8706({ value = 8706, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8706, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8706, 'data-value': derived.doubled }, children);
}
export default Component8706;
