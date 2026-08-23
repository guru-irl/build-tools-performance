import React from 'react';
const LABEL_29119 = 'component_29119';
export function Component29119({ value = 29119, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29119, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29119, 'data-value': derived.doubled }, children);
}
export default Component29119;
