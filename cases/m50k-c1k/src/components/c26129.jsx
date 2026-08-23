import React from 'react';
const LABEL_26129 = 'component_26129';
export function Component26129({ value = 26129, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26129, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26129, 'data-value': derived.doubled }, children);
}
export default Component26129;
