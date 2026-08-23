import React from 'react';
const LABEL_34673 = 'component_34673';
export function Component34673({ value = 34673, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34673, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34673, 'data-value': derived.doubled }, children);
}
export default Component34673;
