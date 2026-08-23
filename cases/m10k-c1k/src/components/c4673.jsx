import React from 'react';
const LABEL_4673 = 'component_4673';
export function Component4673({ value = 4673, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4673, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4673, 'data-value': derived.doubled }, children);
}
export default Component4673;
