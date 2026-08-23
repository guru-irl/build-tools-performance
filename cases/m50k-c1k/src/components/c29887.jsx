import React from 'react';
const LABEL_29887 = 'component_29887';
export function Component29887({ value = 29887, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29887, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29887, 'data-value': derived.doubled }, children);
}
export default Component29887;
