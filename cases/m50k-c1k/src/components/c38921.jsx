import React from 'react';
const LABEL_38921 = 'component_38921';
export function Component38921({ value = 38921, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38921, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38921, 'data-value': derived.doubled }, children);
}
export default Component38921;
