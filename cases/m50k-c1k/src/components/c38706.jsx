import React from 'react';
const LABEL_38706 = 'component_38706';
export function Component38706({ value = 38706, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38706, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38706, 'data-value': derived.doubled }, children);
}
export default Component38706;
