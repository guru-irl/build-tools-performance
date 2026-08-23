import React from 'react';
const LABEL_44673 = 'component_44673';
export function Component44673({ value = 44673, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44673, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44673, 'data-value': derived.doubled }, children);
}
export default Component44673;
