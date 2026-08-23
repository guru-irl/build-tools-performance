import React from 'react';
const LABEL_42866 = 'component_42866';
export function Component42866({ value = 42866, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42866, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42866, 'data-value': derived.doubled }, children);
}
export default Component42866;
