import React from 'react';
const LABEL_36231 = 'component_36231';
export function Component36231({ value = 36231, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36231, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36231, 'data-value': derived.doubled }, children);
}
export default Component36231;
