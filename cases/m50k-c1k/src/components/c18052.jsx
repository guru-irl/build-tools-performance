import React from 'react';
const LABEL_18052 = 'component_18052';
export function Component18052({ value = 18052, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18052, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18052, 'data-value': derived.doubled }, children);
}
export default Component18052;
