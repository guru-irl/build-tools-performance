import React from 'react';
const LABEL_32887 = 'component_32887';
export function Component32887({ value = 32887, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32887, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32887, 'data-value': derived.doubled }, children);
}
export default Component32887;
