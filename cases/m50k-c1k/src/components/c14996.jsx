import React from 'react';
const LABEL_14996 = 'component_14996';
export function Component14996({ value = 14996, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14996, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14996, 'data-value': derived.doubled }, children);
}
export default Component14996;
