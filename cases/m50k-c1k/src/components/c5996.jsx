import React from 'react';
const LABEL_5996 = 'component_5996';
export function Component5996({ value = 5996, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5996, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5996, 'data-value': derived.doubled }, children);
}
export default Component5996;
