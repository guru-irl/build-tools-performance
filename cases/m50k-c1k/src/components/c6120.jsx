import React from 'react';
const LABEL_6120 = 'component_6120';
export function Component6120({ value = 6120, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6120, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6120, 'data-value': derived.doubled }, children);
}
export default Component6120;
