import React from 'react';
const LABEL_13706 = 'component_13706';
export function Component13706({ value = 13706, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13706, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13706, 'data-value': derived.doubled }, children);
}
export default Component13706;
