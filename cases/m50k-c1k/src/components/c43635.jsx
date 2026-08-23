import React from 'react';
const LABEL_43635 = 'component_43635';
export function Component43635({ value = 43635, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43635, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43635, 'data-value': derived.doubled }, children);
}
export default Component43635;
