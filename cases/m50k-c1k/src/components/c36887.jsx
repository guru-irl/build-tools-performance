import React from 'react';
const LABEL_36887 = 'component_36887';
export function Component36887({ value = 36887, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36887, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36887, 'data-value': derived.doubled }, children);
}
export default Component36887;
