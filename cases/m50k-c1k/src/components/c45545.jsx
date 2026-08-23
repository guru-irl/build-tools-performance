import React from 'react';
const LABEL_45545 = 'component_45545';
export function Component45545({ value = 45545, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45545, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45545, 'data-value': derived.doubled }, children);
}
export default Component45545;
