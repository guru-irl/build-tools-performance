import React from 'react';
const LABEL_40673 = 'component_40673';
export function Component40673({ value = 40673, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40673, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40673, 'data-value': derived.doubled }, children);
}
export default Component40673;
