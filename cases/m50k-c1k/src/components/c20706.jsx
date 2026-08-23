import React from 'react';
const LABEL_20706 = 'component_20706';
export function Component20706({ value = 20706, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20706, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20706, 'data-value': derived.doubled }, children);
}
export default Component20706;
