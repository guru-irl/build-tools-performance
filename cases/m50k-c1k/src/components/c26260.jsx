import React from 'react';
const LABEL_26260 = 'component_26260';
export function Component26260({ value = 26260, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26260, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26260, 'data-value': derived.doubled }, children);
}
export default Component26260;
