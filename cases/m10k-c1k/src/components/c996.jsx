import React from 'react';
const LABEL_996 = 'component_996';
export function Component996({ value = 996, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_996, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_996, 'data-value': derived.doubled }, children);
}
export default Component996;
