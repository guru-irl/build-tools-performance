import React from 'react';
const LABEL_7828 = 'component_7828';
export function Component7828({ value = 7828, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7828, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7828, 'data-value': derived.doubled }, children);
}
export default Component7828;
