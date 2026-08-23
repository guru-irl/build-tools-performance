import React from 'react';
const LABEL_31866 = 'component_31866';
export function Component31866({ value = 31866, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31866, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31866, 'data-value': derived.doubled }, children);
}
export default Component31866;
