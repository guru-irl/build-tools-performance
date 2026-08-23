import React from 'react';
const LABEL_16902 = 'component_16902';
export function Component16902({ value = 16902, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16902, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16902, 'data-value': derived.doubled }, children);
}
export default Component16902;
