import React from 'react';
const LABEL_43797 = 'component_43797';
export function Component43797({ value = 43797, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43797, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43797, 'data-value': derived.doubled }, children);
}
export default Component43797;
