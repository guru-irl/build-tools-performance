import React from 'react';
const LABEL_6902 = 'component_6902';
export function Component6902({ value = 6902, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6902, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6902, 'data-value': derived.doubled }, children);
}
export default Component6902;
