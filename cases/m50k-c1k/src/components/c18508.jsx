import React from 'react';
const LABEL_18508 = 'component_18508';
export function Component18508({ value = 18508, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18508, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18508, 'data-value': derived.doubled }, children);
}
export default Component18508;
