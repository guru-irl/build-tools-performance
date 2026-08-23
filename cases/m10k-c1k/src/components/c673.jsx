import React from 'react';
const LABEL_673 = 'component_673';
export function Component673({ value = 673, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_673, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_673, 'data-value': derived.doubled }, children);
}
export default Component673;
