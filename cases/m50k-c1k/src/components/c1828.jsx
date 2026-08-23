import React from 'react';
const LABEL_1828 = 'component_1828';
export function Component1828({ value = 1828, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1828, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1828, 'data-value': derived.doubled }, children);
}
export default Component1828;
