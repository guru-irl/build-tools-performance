import React from 'react';
const LABEL_18414 = 'component_18414';
export function Component18414({ value = 18414, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18414, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18414, 'data-value': derived.doubled }, children);
}
export default Component18414;
