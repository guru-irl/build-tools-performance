import React from 'react';
const LABEL_3828 = 'component_3828';
export function Component3828({ value = 3828, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3828, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3828, 'data-value': derived.doubled }, children);
}
export default Component3828;
