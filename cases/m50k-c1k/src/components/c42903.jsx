import React from 'react';
const LABEL_42903 = 'component_42903';
export function Component42903({ value = 42903, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42903, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42903, 'data-value': derived.doubled }, children);
}
export default Component42903;
