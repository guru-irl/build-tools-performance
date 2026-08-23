import React from 'react';
const LABEL_6295 = 'component_6295';
export function Component6295({ value = 6295, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6295, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6295, 'data-value': derived.doubled }, children);
}
export default Component6295;
